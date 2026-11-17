#!/usr/bin/env python3
"""Build favicons, resized partner logos, blog figures and OG cards.

Run from the repo root. Safe to re-run. OG cards use the vendored Sora file
when present, otherwise Inter.
"""

from __future__ import annotations

import textwrap
from pathlib import Path

from PIL import Image, ImageDraw, ImageEnhance, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parents[1]
INK = (14, 17, 22, 255)
PAPER = (247, 246, 242, 255)
COPPER = (217, 112, 43, 255)
MIST = (163, 169, 179, 255)
GRAPHITE = (22, 26, 33, 255)
LINE = (42, 48, 58, 255)

SORA = ROOT / "scripts" / "fonts" / "Sora-Variable.ttf"
INTER = Path("/usr/share/fonts/truetype/macos/Inter-SemiBold.ttf")
INTER_REG = Path("/usr/share/fonts/truetype/macos/Inter-Regular.ttf")
MONO = Path("/usr/share/fonts/truetype/jetbrains-mono/JetBrainsMono-Medium.ttf")


def trim(im: Image.Image, threshold: int = 12) -> Image.Image:
    im = im.convert("RGBA")
    mask = im.getchannel("A").point(lambda p: 255 if p > threshold else 0)
    box = mask.getbbox()
    return im.crop(box) if box else im


def resize_height(im: Image.Image, height: int) -> Image.Image:
    ratio = height / im.height
    width = max(1, round(im.width * ratio))
    return im.resize((width, height), Image.Resampling.LANCZOS)


def font(size: int, weight: int = 600) -> ImageFont.FreeTypeFont:
    if SORA.exists():
        face = ImageFont.truetype(str(SORA), size)
        try:
            face.set_variation_by_axes([weight])
        except Exception:
            pass
        return face
    path = INTER if weight >= 600 else INTER_REG
    return ImageFont.truetype(str(path), size)


def mono(size: int) -> ImageFont.FreeTypeFont:
    path = MONO if MONO.exists() else INTER_REG
    return ImageFont.truetype(str(path), size)


def wrap(draw: ImageDraw.ImageDraw, text: str, face: ImageFont.FreeTypeFont, width: int) -> list[str]:
    words = text.split()
    lines: list[str] = []
    current = ""
    for word in words:
        trial = word if not current else f"{current} {word}"
        if draw.textlength(trial, font=face) <= width:
            current = trial
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def og_card(path: Path, eyebrow: str, title: str, footer: str) -> None:
    w, h = 1200, 630
    image = Image.new("RGBA", (w, h), INK)
    draw = ImageDraw.Draw(image)
    # Schematic grid, fading toward the left so the type stays clear.
    for x in range(0, w, 48):
        shade = 32 + int(18 * (x / w))
        draw.line([(x, 0), (x, h)], fill=(shade, shade + 4, shade + 10, 255))
    for y in range(0, h, 48):
        draw.line([(0, y), (w, y)], fill=(32, 36, 44, 255))
    fade = Image.new("L", (w, h), 0)
    fade_draw = ImageDraw.Draw(fade)
    fade_draw.rectangle((0, 0, 820, h), fill=210)
    fade_draw.rectangle((820, 0, w, h), fill=80)
    fade = fade.filter(ImageFilter.GaussianBlur(40))
    veil = Image.new("RGBA", (w, h), INK)
    image = Image.composite(veil, image, fade)
    draw = ImageDraw.Draw(image)

    # Copper trace ornament on the right.
    draw.line([(860, 90), (1080, 90), (1120, 130), (1120, 520)], fill=COPPER, width=3)
    draw.ellipse((1112, 512, 1128, 528), fill=COPPER)
    draw.line([(900, 180), (1040, 180), (1080, 220)], fill=LINE, width=2)
    draw.rounded_rectangle((930, 250, 1110, 420), radius=16, outline=COPPER, width=3)
    draw.rounded_rectangle((968, 286, 1072, 384), radius=8, outline=COPPER, width=2)

    mark = Path("/tmp/ec-wordmark-og.png")
    if mark.exists():
        logo = trim(Image.open(mark))
        logo = resize_height(logo, 40)
        image.alpha_composite(logo, (72, 58))

    draw.text((72, 150), eyebrow.upper(), font=mono(22), fill=COPPER)

    face = font(64, 600)
    lines = wrap(draw, title, face, 760)
    while len(lines) > 4 and face.size > 42:
        face = font(face.size - 4, 600)
        lines = wrap(draw, title, face, 760)
    y = 210
    for line in lines:
        draw.text((72, y), line, font=face, fill=PAPER)
        y += int(face.size * 1.18)

    draw.line([(72, 560), (420, 560)], fill=COPPER, width=3)
    draw.text((72, 574), footer, font=mono(20), fill=MIST)
    path.parent.mkdir(parents=True, exist_ok=True)
    image.convert("RGB").save(path, "PNG", optimize=True)


def prepare_logos() -> None:
    out = ROOT / "src" / "assets" / "partners"
    out.mkdir(parents=True, exist_ok=True)
    heights = {
        "lyra": 120,
        "pcbdesign": 88,
        "sensa": 80,
        "kingpin": 160,
        "valsogard": 128,
    }
    for name, height in heights.items():
        im = trim(Image.open(ROOT / "media" / "partners" / f"{name}.webp"))
        im = resize_height(im, height)
        im.save(out / f"{name}.webp", "WEBP", quality=82, method=6)


def prepare_brand() -> None:
    import subprocess

    subprocess.check_call(["node", "scripts/render_brand.mjs"], cwd=ROOT)
    icon = Image.open(ROOT / "public" / "icons" / "icon-512.png").convert("RGBA")
    icon.save(
        ROOT / "public" / "favicon.ico",
        format="ICO",
        sizes=[(16, 16), (32, 32), (48, 48)],
    )


def prepare_blog_figures() -> None:
    import subprocess

    out = ROOT / "src" / "assets" / "blog"
    out.mkdir(parents=True, exist_ok=True)
    mapping = {
        "assets/images/blog/IS32Fl3202_review/ReviewPicIS32FL3202.jpg": "is32.jpg",
        "assets/images/blog/TCKE9_review/TCKE.jpg": "tcke.jpg",
    }
    tmp = Path("/tmp/blog-src")
    tmp.mkdir(exist_ok=True)
    for src, name in mapping.items():
        raw = tmp / name
        subprocess.check_call(["git", "show", f"0f325c4:{src}"], stdout=raw.open("wb"))
        im = Image.open(raw).convert("RGB")
        im.thumbnail((1400, 1400), Image.Resampling.LANCZOS)
        im.save(out / name.replace(".jpg", ".webp"), "WEBP", quality=76, method=6)


REDIRECT_HTML = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Redirecting…</title>
<link rel="canonical" href="https://embedded-consultants.com{target}">
<meta name="robots" content="noindex">
<meta http-equiv="refresh" content="0; url={target}">
</head>
<body>
<p>This page has moved. <a href="{target}">Continue</a>.</p>
</body>
</html>
"""


def prepare_redirects() -> None:
    pages = {
        "blog/IS32FL3202_review": "/blog/is32fl3202_review/",
        "blog/TCKE9_review": "/blog/tcke9_review/",
        "blog/IS32Fl3202_review": "/blog/is32fl3202_review/",
    }
    for folder, target in pages.items():
        dest = ROOT / "public" / folder / "index.html"
        dest.parent.mkdir(parents=True, exist_ok=True)
        dest.write_text(REDIRECT_HTML.format(target=target), encoding="utf-8")


def prepare_og() -> None:
    cards = [
        (
            "og-default.png",
            "Embedded Consultants  ·  Novi Sad",
            "Electronic products, engineered from idea to production.",
            "embedded-consultants.com",
        ),
        (
            "og-blog.png",
            "Engineering notes",
            "Notes from real boards, parts and production handovers.",
            "embedded-consultants.com/blog",
        ),
        (
            "og-privacy.png",
            "Embedded Consultants",
            "Privacy",
            "embedded-consultants.com/privacy",
        ),
        (
            "og-pcb-library-management.png",
            "PCB design",
            "PCB library management: structure, workflow and what we actually do.",
            "embedded-consultants.com",
        ),
        (
            "og-is32fl3202_review.png",
            "Component review",
            "IS32FL3202 LED controller, reviewed.",
            "embedded-consultants.com",
        ),
        (
            "og-tcke9_review.png",
            "Component review",
            "TCKE9 eFuse for USB VBUS.",
            "embedded-consultants.com",
        ),
        (
            "og-post-opening.png",
            "Engineering notes",
            "Opening the Embedded Consultants blog.",
            "embedded-consultants.com",
        ),
    ]
    out = ROOT / "public" / "og"
    for name, eyebrow, title, footer in cards:
        og_card(out / name, eyebrow, title, footer)


def main() -> None:
    prepare_logos()
    prepare_brand()
    prepare_blog_figures()
    prepare_redirects()
    prepare_og()
    print("assets ready")


if __name__ == "__main__":
    main()
