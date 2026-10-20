import os
import zipfile
import fitz  # Install once via: pip install pymupdf

# Create the exact folders needed inside Next.js public/
folders = [
    "public/docs",
    "public/images/awards",
    "public/images/projects",
    "public/images/journey",
    "extracted_raw"
]
for folder in folders:
    os.makedirs(folder, exist_ok=True)

# 1. Extract every image from your .docx files
docx_files = ["Highlights_2026_Tanmay_Kadlag.docx", "Exploration_Projects.docx"]
for docx in docx_files:
    if os.path.exists(docx):
        prefix = os.path.splitext(docx)[0]
        with zipfile.ZipFile(docx, "r") as z:
            for item in z.namelist():
                if item.startswith("word/media/"):
                    filename = f"{prefix}_{os.path.basename(item)}"
                    with open(os.path.join("extracted_raw", filename), "wb") as out:
                        out.write(z.read(item))
        print(f"Extracted images from {docx}")

# 2. Extract every image from your PDF files
pdf_files = ["My Journey from JNV to VNIT and Beyond!.pdf", "Yoga_Journey.pdf"]
for pdf in pdf_files:
    if os.path.exists(pdf):
        doc = fitz.open(pdf)
        prefix = os.path.splitext(pdf)[0].replace(" ", "_")
        for page_num in range(len(doc)):
            for img_idx, img in enumerate(doc.get_page_images(page_num)):
                xref = img[0]
                pix = fitz.Pixmap(doc, xref)
                if pix.n - pix.alpha > 3:
                    pix = fitz.Pixmap(fitz.csRGB, pix)
                out_name = f"{prefix}_page{page_num+1}_img{img_idx+1}.png"
                pix.save(os.path.join("extracted_raw", out_name))
        print(f"Extracted images from {pdf}")

print("\nDone! Open the 'extracted_raw' folder to view all extracted high-res images.")