import block_icons from '../block-icons';
import './parent.js';
const { registerBlockType }         =   wp.blocks;
const { __ }                        =   wp.i18n;
const { InnerBlocks,
        InspectorControls,
        RichText,MediaUpload,
        MediaUploadCheck }                  =   wp.blockEditor;
const { Panel, PanelBody, PanelRow,
        TextControl,RangeControl,
        SelectControl,Button}                =   wp.components;
import classnames from 'classnames';
const attributes = {
    id: {
        type: 'string',
    },
    clientid: {
        type: 'string',
    },
    minHeightContainer: {
        type: 'number'
    },
    textColor: {
        type: 'string'
    },
    backgroundColor: {
        type: 'string',
    },
    backgroundImage: {
        type: 'string',
        default: null
    },
    backgroundImageAttachment: {
        type: 'string'
    },
    backgroundImageSize: {
        type: 'string',
        default: 'cover'
    },
    backgroundImagePos: {
        type: 'string'
    },
    backgroundImageRepeat: {
        type: 'string',
        default: 'no-repeat'
    },
    backgroundColorTheme: {
        type: 'string'
    },    

}

registerBlockType( 'zenbsblocks/carousel-item', {
    title:                  __( 'Carousel slide', 'zenbsblocks' ),
    description:            __( 'Carousel panel with any block content and clickable title text.', 'zenbsblocks' ),
    category:               'zenbsblocks',
    icon:                   block_icons.carousel,
    parent:                  ['zenbsblocks/carousel'],
    attributes,

    edit: ( props ) => {
        //Set the unique id of each element
        const { attributes, setAttributes, clientId } = props;
        const { id } = attributes;
        //const idTrimmed = props.attributes.id.substring(0, 6);
        if ( ! id ) {
            setAttributes( { id: clientId } );
        }
        setAttributes( { clientid: clientId } );

                //Only use the background inline style if its not null
                let BackgroundIsActive = '';
                if (props.attributes.backgroundImage !== null) {
                    BackgroundIsActive = {
                        backgroundImage: `url( ${props.attributes.backgroundImage} )`
                    }
                }

                const style = {
                    minHeight: props.attributes.minHeightContainer,
                    color: props.attributes.textColor,
                    backgroundColor: props.attributes.backgroundColor,
                    backgroundSize: props.attributes.backgroundImageSize,
                    backgroundAttachment: props.attributes.backgroundImageAttachment,
                    backgroundRepeat: props.attributes.backgroundImageRepeat,
                    backgroundPosition: props.attributes.backgroundImagePos
                };
        
                function onImageSelect(imageObject) {
                    setAttributes({
                        backgroundImage: imageObject.sizes.full.url
                    });
        
                }
        
                const onRemoveImage = () => {
                    setAttributes({
                        //Remove image
                        backgroundImage: null
                    });
                };

        return [
            <InspectorControls>
            <Panel>
                <PanelBody title={ __('Carousel panel', 'zenbsblocks') }>


               
                    <RangeControl
                            label={__('Minimum height', 'zenbsblocks')}
                            min={0}
                            max={2000}
                            step={5}
                            allowReset={true}
                            resetFallbackValue={'0'}
                            value={props.attributes.minHeightContainer}
                            onChange={(new_val) => {
                                props.setAttributes({ minHeightContainer: new_val })
                            }} />

                        </PanelBody>

                        
                        <PanelBody title={__('Background image', 'zenbsblocks')} initialOpen={true} >
                {!!attributes.backgroundImage == '' &&
                    <PanelRow className="w-100">
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={onImageSelect}
                                type="image"
                                value={attributes.backgroundImage}
                                render={({ open }) => (

                                    <Button className="components-button editor-post-featured-image__toggle" onClick={open}>
                                        Select a background image
                                    </Button>

                                )}
                            />
                        </MediaUploadCheck></PanelRow>  
    }
                        {!!attributes.backgroundImage &&
                            <PanelRow> <MediaUploadCheck>
                                <div className="d-flex flex-wrap">
                                    <img src={attributes.backgroundImage} alt={__('Background image', 'image-selector-example')} />
                                    <Button className="components-button block-library-cover__reset-button is-secondary is-small" onClick={onRemoveImage} >
                                        {__('Clear Media', 'zenbsblocks')}
                                    </Button>
                                </div>
                            </MediaUploadCheck></PanelRow>
                    }

                    <PanelRow className="w-100">
                        <SelectControl
                            label={__('Background fixed', 'zenbsblocks')}
                            value={props.attributes.backgroundImageAttachment}
                            options={[
                                { value: 'initial', label: 'Initial' },
                                { value: 'fixed', label: 'Fixed' }
                            ]}
                            onChange={(new_val) => {
                                props.setAttributes({ backgroundImageAttachment: new_val })
                            }} />
                    </PanelRow>

                    <PanelRow className="w-100">
                        <SelectControl
                            label={__('Background Tint', 'zenbsblocks')}
                            value={props.attributes.backgroundImageTint}
                            options={[
                                { value: '', label: 'Tint None' },
                                { value: 'tint tint-01', label: '10%' },
                                { value: 'tint tint-02', label: '20%' },
                                { value: 'tint tint-03', label: '30%' },
                                { value: 'tint tint-04', label: '40%' },
                                { value: 'tint tint-05', label: '50%' },
                                { value: 'tint tint-06', label: '60%' },
                                { value: 'tint tint-07', label: '70%' },
                                { value: 'tint tint-08', label: '80%' },
                                { value: 'tint tint-09', label: '90%' },
                            ]}
                            onChange={(new_val) => {
                                props.setAttributes({ backgroundImageTint: new_val })
                            }} />
                    </PanelRow>

                    <PanelRow className="w-100">
                        <SelectControl
                            label={__('Background Size', 'zenbsblocks')}
                            value={props.attributes.backgroundImageSize}
                            options={[
                                { value: 'cover', label: 'Cover' },
                                { value: 'contain', label: 'Contain' },
                                { value: 'auto', label: 'Auto' },
                                { value: '100%', label: '100%' }
                            ]}
                            onChange={(new_val) => {
                                props.setAttributes({ backgroundImageSize: new_val })
                            }} />
                    </PanelRow>

                    <PanelRow className="w-100">
                        <SelectControl
                            label={__('Background Repeat', 'zenbsblocks')}
                            value={props.attributes.backgroundImageRepeat}
                            options={[
                                { value: 'no-repeat', label: 'No-repeat' },
                                { value: 'repeat', label: 'Repeat' },
                                { value: 'repeat-x', label: 'Repeat-x' },
                                { value: 'repeat-y', label: 'Repeat-y' },
                                { value: 'space', label: 'Space' },
                                { value: 'round', label: 'Round' },
                                { value: 'initial', label: 'Initial' }
                            ]}
                            onChange={(new_val) => {
                                props.setAttributes({ backgroundImageRepeat: new_val })
                            }} />
                    </PanelRow>


                    <PanelRow className="w-100">
                        <SelectControl
                            label={__('Background image position', 'zenbsblocks')}
                            value={props.attributes.backgroundImagePos}
                            options={[
                                { value: 'center center', label: 'Center Center' },
                                { value: 'center top', label: 'Center Top' },
                                { value: 'center bottom', label: 'Center Bottom' },
                                { value: 'left top', label: 'Left Top' },
                                { value: 'left center', label: 'Left Center' },
                                { value: 'left bottom', label: 'Left Bottom' },
                                { value: 'right center', label: 'Right Center' },
                                { value: 'right bottom', label: 'Right Bottom' }
                            ]}
                            onChange={(new_val) => {
                                props.setAttributes({ backgroundImagePos: new_val })
                            }} />
                    </PanelRow>
                </PanelBody>
 

            </Panel>


            

    </InspectorControls>,
        <div 
        
        // className="carousel-item"

        className={
            classnames(
                'carousel-item',
                [`${props.attributes.textColorTheme !== undefined ? `${props.attributes.textColorTheme}` : ''}`],
                [`${props.attributes.backgroundColorTheme !== undefined ? `${props.attributes.backgroundColorTheme}` : ''}`],
                [`${props.attributes.backgroundImageTint !== undefined ? `${props.attributes.backgroundImageTint}` : ''}`],
            )} 

        style={{
            ...style,
            ...BackgroundIsActive
        }}
        >
                          <InnerBlocks
                                            allowedBlocks={ ['zenbsblocks/container'] }
                                            template={[
                                                ['zenbsblocks/container']
                                            ]}
                                        />  
        </div>
        ]
    },
    save: (  props ) => {
        //Save the unique block id from above
        const { attributes } = props;
        const { id } = attributes;

        const style = {
            minHeight: props.attributes.minHeightContainer,
            color: props.attributes.textColor,
            backgroundColor: props.attributes.backgroundColor,
            backgroundSize: props.attributes.backgroundImageSize,
            backgroundAttachment: props.attributes.backgroundImageAttachment,
            backgroundRepeat: props.attributes.backgroundImageRepeat,
            backgroundPosition: props.attributes.backgroundImagePos
        };

        //Only use the background inline style if its not null
        let BackgroundIsActive = '';
        if (props.attributes.backgroundImage !== null) {
            BackgroundIsActive = {
                backgroundImage: `url( ${props.attributes.backgroundImage} )`
            }
        }

        return ( 
            <div  
            
            //className={`carousel-item  ${props.attributes.clientid}`}

            className={
                classnames(
                    `carousel-item  ${props.attributes.clientid}`,
                    [`${props.attributes.textColorTheme !== undefined ? `${props.attributes.textColorTheme}` : ''}`],
                    [`${props.attributes.backgroundColorTheme !== undefined ? `${props.attributes.backgroundColorTheme}` : ''}`],
                    [`${props.attributes.backgroundImageTint !== undefined ? `${props.attributes.backgroundImageTint}` : ''}`],
                )} 


            style={{
                ...style,
                ...BackgroundIsActive
            }}
            >
                    <InnerBlocks.Content/>
            </div>        
        )
    }
});