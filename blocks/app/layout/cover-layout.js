import block_icons from "../block-icons";
const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;
const { InnerBlocks } = wp.blockEditor;

registerBlockType("zenbsgridblocks/cover-layout", {
  title: __("Cover Layout", "zenbsgridblocks"),
  description: __("A cover layout to include an image or video with text overlay.", "zenbsgridblocks"),
  category: "zenbsgridblocks",
  icon: block_icons.div,
  attributes: {
   
  },
  edit: (props, isSelected) => {

    return [

      <div className={props.className}>

        <InnerBlocks
          template={[
            ['core/cover', {"dimRatio":0,"isDark":false},
              [
                ['zenbsgridblocks/responsive-spacer'],
                ['zenbsgridblocks/container'],
                ['zenbsgridblocks/responsive-spacer'],
              ]
            ],
          ]}
        />

      </div>
    ,
    ];
  },
  save: (props) => {
    const { attributes } = props;

    return (
      <div className={props.className}>
         <InnerBlocks.Content />
      </div>
    )
}
});
