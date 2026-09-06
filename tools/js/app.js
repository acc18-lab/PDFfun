function openTool(toolName) {

    if (toolName === "Merge PDF") {
        window.location.href = "tools/merge-pdf.html";
        return;
    }

    if (toolName === "Split PDF") {
        window.location.href = "tools/split-pdf.html";
        return;
    }

    if (toolName === "Compress PDF") {
        window.location.href = "tools/compress-pdf.html";
        return;
    }

    if (toolName === "JPG to PDF") {
        window.location.href = "tools/jpg-to-pdf.html";
        return;
    }

    if (toolName === "PDF to JPG") {
        window.location.href = "tools/pdf-to-jpg.html";
        return;
    }

    if (toolName === "Rotate PDF") {
        window.location.href = "tools/rotate-pdf.html";
        return;
    }

    if (toolName === "Protect PDF") {
    window.location.href = "tools/protect-pdf.html";
    return;
    }

    if (toolName === "PDF to Word") {
    window.location.href = "tools/pdf-to-word.html";
    return;
    }

    if (toolName === "Word to PDF") {
    window.location.href = "tools/word-to-pdf.html";
    return;
    }

    if (toolName === "Unlock PDF") {
    window.location.href = "tools/unlock-pdf.html";
    return;
    }

    if (toolName === "Watermark PDF") {
    window.location.href = "tools/watermark-pdf.html";
    return;
    }

    if (toolName === "Organize PDF") {
    window.location.href = "tools/organize-pdf.html";
    return;
    }

    alert(
        toolName +
        " is coming soon."
    );
}