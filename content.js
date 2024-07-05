// List of common ad-related classes and IDs
const adSelectors = [
    ".ad",
    ".ads",
    ".adsbygoogle",
    ".ad-container",
    "#ad",
    "#ads",
    "#ad-container",
    ".banner-ad",
    ".sponsored"
];

function removeAds() {
    adSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(ad => ad.remove());
    });
}

// Execute the function when the script loads
removeAds();

// Monitor for changes in the DOM to catch dynamically loaded ads
const observer = new MutationObserver(removeAds);
observer.observe(document, { childList: true, subtree: true });