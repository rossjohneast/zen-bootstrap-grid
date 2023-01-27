import block_icons from '../block-icons';
import sharedAnimationsInspCnt from '../shared/animation/aos-insp-cnt.js';
import './editor.scss';
import './style.scss';
const { registerBlockType }         =   wp.blocks;
const { __ }                        =   wp.i18n;
const { InspectorControls,
        InnerBlocks,
        MediaUpload,
        MediaUploadCheck, }         =   wp.blockEditor;
const { Panel, PanelBody, 
        PanelRow,
        Button,
        Dashicon,
        SelectControl  }            =   wp.components;

registerBlockType( 'zenbsblocks/card-custom', {
    title:                              __( 'Card Custom', 'zenbsblocks' ),
    description:                        __( 'Display an optional image, and custom content in a neat layout.', 'zenbsblocks' ),
    category:                           'zenbsblocks',
    icon:                               block_icons.card,
    attributes: {
        img_ID:{
            type:   'number'
        },
        cardType: {
            type: 'string',
            default: 'withimg',
            selector: '.card-type-ph'
        },
        img_URL:{
            type:       'string',
            source:     'attribute',
            attribute:  'src',
            selector:   'img'
        },
        img_alt:{
            type:       'string',
            source:     'attribute',
            attribute:  'alt',
            selector:   'img'
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
    edit: ( props ) => {

        const select_img = ( img ) => {
            props.setAttributes({
                img_ID:     img.id,
                img_URL:    img.url,
                img_alt:    img.alt
            })
        };

        const remove_img = (  ) => {
            props.setAttributes({
                img_ID:     null,
                img_URL:    null,
                img_alt:    null
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
                        <PanelBody title={ __('Card Settings', 'zenbsblocks') }>

                            <PanelRow className="w-100">
                            <SelectControl
                                label={__('Card type', 'zenbsblocks')}
                                value={props.attributes.cardType}
                                options={[
                                    { value: 'withimg', label: 'Default (With image)' },
                                    { value: 'noimg', label: 'Empty (No image)' },
                                ]}
                                onChange={(new_val) => {
                                    props.setAttributes({ cardType: new_val })
                                }} />
                        </PanelRow>

                        </PanelBody>

                    </Panel>
            </InspectorControls>,
            
                <div className="card">

                    {props.attributes.cardType == 'withimg' && props.attributes.img_ID && (

                        <div className="card-img-top image-ctr">
                            <img src={ props.attributes.img_URL }
                                alt={ props.attributes.img_alt} />

                            { props.isSelected ? (
                                <Button className="btn-remove" onClick={ remove_img }>
                                    <Dashicon icon='no' size='20'/> 
                                </Button>
                            ) : null }
                        
                        </div>
                    ) }

                    {props.attributes.cardType == 'withimg' && !props.attributes.img_ID && (
                        <MediaUploadCheck>
                            <MediaUpload
                                allowedType={[ 'image' ]}
                                value={ props.attributes.img_ID }
                                onSelect={ select_img }
                                render={ ({ open }) => (
                                    <Button className={ "button button-large" } onClick={ open }>
                                        { __('Upload Image', 'Upload Image') }    
                                    </Button>
                                ) }></MediaUpload>
                        </MediaUploadCheck>
                        
                    ) }

                    <div className="card-body">
                                    <InnerBlocks 
                                    />
                    </div>
                </div>
        ];
    },
    save: ( props ) => {
        return(
                <div className="card">
                 {props.attributes.cardType == 'withimg' && props.attributes.img_ID && (  
                    <img className="card-img-top" src={props.attributes.img_URL}
                        alt={props.attributes.img_alt} />
                 )}
                    <div className="card-body">
                        <InnerBlocks.Content />
                    </div>
                </div>
        );
    }
});