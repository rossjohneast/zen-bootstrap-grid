import block_icons from '../block-icons';
const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;
const { InnerBlocks } = wp.blockEditor;
const { select, dispatch } = wp.data;

const attributes = {
    id: {
        type: 'string',
    },
    clientid: {
        type: 'string',
    },
}

registerBlockType('zenbsblocks/carousel', {
    title: __('Carousel', 'zenbsblocks'),
    description: __('A slideshow component for cycling through elements—images or slides of text—like a carousel.', 'zenbsblocks'),
    category: 'zenbsblocks',
    icon: block_icons.carousel,

    attributes,


    edit: (props) => {
        const { attributes, setAttributes, clientId, isSelected } = props;
        const { id } = attributes;
        setAttributes( { clientid: clientId } );
        //Add the active class to the first slide...
        // find innerBlocks, add "active" to the first slide, set attribute slideLength
        // const children = select('core/editor').getBlocksByClientId(clientId)[0].innerBlocks;
        // const firstChild = children[0] || false;
        // if (firstChild) {
        //     dispatch('core/editor').updateBlockAttributes(firstChild.clientId, { className: 'active' });
        //     setAttributes({ clientId });
        // }
        //End the active class to the first slide...

        if (!id) {
            setAttributes({ id: clientId });
        }

        return (
            <div
                class="carousel">

                <InnerBlocks
                    allowedBlocks={['zenbsblocks/carousel-item']}
                    template={[
                        ['zenbsblocks/carousel-item'],
                        ['zenbsblocks/carousel-item']
                    ]}
                />

            </div>

        )
    },
    save: (props) => {
        const { attributes } = props;
        const { id } = attributes;
        // {`${id}`}
        return (
            <div id={`carouselid-${props.attributes.clientid}`} className="carousel slide" data-bs-ride="carousel">

                <div className="carousel-inner">
                    <InnerBlocks.Content />
                </div>

                <button class="carousel-control-prev" type="button" data-bs-target={`#carouselid-${props.attributes.clientid}`} data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target={`#carouselid-${props.attributes.clientid}`} data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>

            </div>
        )
    }
});