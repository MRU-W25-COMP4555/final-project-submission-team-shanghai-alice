// Filename: IconSize48.js
(() => {
    const _Window_Base_drawIcon = Window_Base.prototype.drawIcon;
    Window_Base.prototype.drawIcon = function(iconIndex, x, y) {
        const bitmap = ImageManager.loadSystem('IconSet');
        const pw = 48; // icon width
        const ph = 48; // icon height
        const sx = iconIndex % 16 * pw;
        const sy = Math.floor(iconIndex / 16) * ph;
        this.contents.blt(bitmap, sx, sy, pw, ph, x, y);
    };
})();