import block_icons from '../block-icons';
import sharedAnimationsInspCnt from '../shared/animation/aos-insp-cnt.js';
import './editor.scss';
import './style.scss';
const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;
const { InspectorControls,
    MediaUpload,
    MediaUploadCheck,
    RichText,
    InnerBlocks } = wp.blockEditor;
const { Panel, PanelBody,
    PanelRow,
    TextControl,
    TextareaControl,
    Button,
    Dashicon } = wp.components;

registerBlockType('zenbsblocks/card', {
    title: __('Card', 'zenbsblocks'),
    description: __('Display an image, text & a button in a neat layout format.', 'zenbsblocks'),
    category: 'zenbsblocks',
    icon: block_icons.card,
    attributes: {
        img_ID: {
            type: 'number'
        },
        img_URL: {
            type: 'string',
            source: 'attribute',
            attribute: 'src',
            selector: 'img'
        },
        img_alt: {
            type: 'string',
            source: 'attribute',
            attribute: 'alt',
            selector: 'img'
        },
        title: {
            type: 'string',
            source: 'text',
            selector: '.title-ph',
            default: 'Card content container'
        },
        text: {
            type: 'string',
            source: 'text',
            selector: '.text-ph',
            default: 'An example of a basic card with fixed content. Cards have no fixed width to start, so they’ll naturally fill the full width of its parent element.'
        },
        btn: {
            type: 'string',
            source: 'text',
            selector: '.btn-ph'
        },
        animation: {
            type: 'string',
        },
        animationOffset: {
            type: 'number',
            default: 120
        },
        animationDuration: {
            type: 'number',
            default: 400
        },
        animationDelay: {
            type: 'number',
        },
        animationEasing: {
            type: 'string',
        },
        animationOnce: {
            type: 'boolean',
        },
        animationMirror: {
            type: 'boolean',
        },
        animationPlacement: {
            type: 'string',
        },



    },
    edit: (props) => {

        const select_img = (img) => {
            props.setAttributes({
                img_ID: img.id,
                img_URL: img.url,
                img_alt: img.alt
            })
        };

        const remove_img = () => {
            props.setAttributes({
                img_ID: null,
                img_URL: null,
                img_alt: null
            })
        }

        const toggle_cardlink_target = () => {
            props.setAttributes({
                href_target: !props.attributes.href_target
            })
        }

        return [
            <InspectorControls>
                <Panel>
                    <PanelBody title={__('Card Settings', 'zenbsblocks')}>
                        <PanelRow>
                            <p>Configure the contents of the card here:</p>
                        </PanelRow>

                        <TextControl
                            label={__('Card Title', 'zenbsblocks')}
                            value={props.attributes.title}
                            onChange={(new_val) => {
                                props.setAttributes({ title: new_val })
                            }} />

                        <TextareaControl
                            label={__('Card Text', 'zenbsblocks')}
                            value={props.attributes.text}
                            onChange={(new_val) => {
                                props.setAttributes({ text: new_val })
                            }} />


                    </PanelBody>

                </Panel>
            </InspectorControls>,


                <div className="card">
                    {props.attributes.img_ID ? (
                        <div className="card-img-top image-ctr">
                            <img src={props.attributes.img_URL}
                                alt={props.attributes.img_alt} />

                            {props.isSelected ? (
                                <Button className="btn-remove" onClick={remove_img}>
                                    <Dashicon icon='no' size='20' />
                                </Button>
                            ) : null}

                        </div>
                    ) : (
                        <MediaUploadCheck>
                            <MediaUpload
                                allowedType={['image']}
                                value={props.attributes.img_ID}
                                onSelect={select_img}
                                render={({ open }) => (
                                    <Button className={"button button-large"} onClick={open}>
                                        {__('Upload Image', 'Upload Image')}
                                    </Button>
                                )}></MediaUpload>
                        </MediaUploadCheck>
                    )}

                    <div className="card-body">

                        <RichText
                            className="h3 mb-2 d-block card-title title-ph"

                            value={props.attributes.title}
                            onChange={(new_val) =>
                                props.setAttributes({ title: new_val })
                            }
                            allowedFormats={[]}
                            keepPlaceholderOnFocus
                        />

                        <RichText
                            className="text-ph"
                            selector="p"
                            value={props.attributes.text}
                            onChange={(new_val) =>
                                props.setAttributes({ text: new_val })
                            }
                            allowedFormats={[]}
                            keepPlaceholderOnFocus

                        />

                        <InnerBlocks
                            allowedBlocks={['zenbsblocks/button']}
                        />

                    </div>
                </div>
        ];
    },
    save: (props) => {
        return (
            <div className="card">
                {props.attributes.img_URL != null && (
                    <img className="card-img-top" src={props.attributes.img_URL} alt={props.attributes.img_alt} />
                )}
                <div className="card-body">
                    <h5 className="card-title title-ph">{props.attributes.title}</h5>
                    <p className="card-text text-ph">{props.attributes.text}</p>
                    <InnerBlocks.Content />
                </div>
            </div>
        );
    }
});