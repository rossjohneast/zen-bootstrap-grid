// https://developer.wordpress.org/block-editor/reference-guides/filters/block-filters/#using-a-deny-list
wp.domReady(() => {
  wp.blocks.unregisterBlockType("core/buttons");
  wp.blocks.unregisterBlockType("core/columns");
});
