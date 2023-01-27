import block_icons from '../block-icons';
const { registerBlockType }         =   wp.blocks;
const { __ }                        =   wp.i18n;
const { InnerBlocks }               =   wp.blockEditor;

const attributes = {
}

registerBlockType( 'zenbsblocks/accordion', {
    title:                              __( 'Accordion', 'zenbsblocks' ),
    description:                        __( 'Accordion for seperating large blocks of related content.', 'zenbsblocks' ),
    category:                           'zenbsblocks',
    icon:                               block_icons.accordion,

    attributes,

    edit( { className }) {
        return (
            <div className={ className }>
                <div 
                class="accordion">

                                <InnerBlocks 
                                    allowedBlocks={ ['zenbsblocks/accordion-item'] }    
                                    template={[
                                        ['zenbsblocks/accordion-item']
                                    ]}
                                />

                </div>
            </div>
        )
    },
    save() {
        return (
            <div>
                <div 
                className="accordion">
                            <InnerBlocks.Content />
                </div>
            </div>
        )
    }
});