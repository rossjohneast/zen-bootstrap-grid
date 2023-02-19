
import block_icons from '../block-icons';
const { registerBlockType }         =   wp.blocks;
const { __ }                        =   wp.i18n;
const { InspectorControls,
        MediaUpload,
        MediaUploadCheck,
        RichText,
        InnerBlocks  }              = wp.blockEditor;
const { Panel, PanelBody, 
        PanelRow,
        TextControl,
        TextareaControl, 
        Button,
        Dashicon,FormToggle,
        InputControl,
        RangeControl,
        SelectControl  }            = wp.components;

registerBlockType( 'zenbsgridblocks/container', {
    title:                              __( 'Container', 'zenbsgridblocks' ),
    description:                        __( 'Containers are used to contain, pad, and (sometimes) center the rows within them. While containers can be nested, most layouts do not require a nested container.', 'zenbsgridblocks' ),
    category:                           'zenbsgridblocks',
    icon:                               block_icons.div,
    attributes: {
        id:{
            type:   'number'
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
            type: 'string'
        },
        backgroundImagePos: {
            type: 'string'
        },
        backgroundImageRepeat: {
            type: 'string'
        },
        backgroundColorTheme: {
            type: 'string'
        },
        layoutContainerOption:{
            type:               'string',
            default:            'container'
        },


    },
    edit: ( props ) => {

        const { attributes, setAttributes, textColor, backgroundColor } = props;

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
                        <PanelBody title={ __('Container Settings', 'zenbsgridblocks') } initialOpen={true}>

                        <RangeControl
                            label={__('Minimum height', 'zenbsgridblocks')}
                            min={0}
                            max={2000}
                            step={5}
                            allowReset={true}
                            resetFallbackValue={'0'}
                            value={props.attributes.minHeightContainer}
                            onChange={(new_val) => {
                                props.setAttributes({ minHeightContainer: new_val })
                            }} />


                            <PanelRow className="w-100">
                                <SelectControl
                                    label={ __('Layout container width', 'zenbsgridblocks') }
                                                value={ props.attributes.layoutContainerOption }  
                                                options={[
                                                    {value: 'container', label: 'container'},
                                                    {value: 'container-sm', label: 'container-sm'},
                                                    {value: 'container-md', label: 'container-md'},
                                                    {value: 'container-lg', label: 'container-lg'},
                                                    {value: 'container-xl', label: 'container-xl'},
                                                    {value: 'container-xxl', label: 'container-xxl'},
                                                    {value: 'container-fluid', label: 'container-fluid'}
                                                ]}
                                                onChange={ (new_val) => {
                                                    props.setAttributes({ layoutContainerOption: new_val})
                                }} />
                            </PanelRow>
                            </PanelBody>

                        <PanelBody title={__('Background image', 'zenbsgridblocks')} initialOpen={false} >
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
                                        {__('Clear Media', 'zenbsgridblocks')}
                                    </Button>
                                </div>
                            </MediaUploadCheck></PanelRow>
                    }

                    <PanelRow className="w-100">
                        <SelectControl
                            label={__('Background fixed', 'zenbsgridblocks')}
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
                            label={__('Background Tint', 'zenbsgridblocks')}
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
                            label={__('Background Size', 'zenbsgridblocks')}
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
                            label={__('Background Repeat', 'zenbsgridblocks')}
                            value={props.attributes.backgroundImageRepeat}
                            options={[
                                { value: 'repeat', label: 'Repeat' },
                                { value: 'no-repeat', label: 'No-repeat' },
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
                            label={__('Background image position', 'zenbsgridblocks')}
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
            
                <div className={props.attributes.layoutContainerOption}
                style={{
                    ...style,
                    ...BackgroundIsActive
                }}
                >
                    <InnerBlocks
                        allowedBlocks={ ['zenbsgridblocks/row'] }
                        template={[
                            ['zenbsgridblocks/row']
                        ]}
                    />  
                </div>

        ];
    },
    save: ( props ) => {
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

        return(
                <div className={props.attributes.layoutContainerOption}
                style={{
                    ...style,
                    ...BackgroundIsActive
                }}
        
                >
                    <InnerBlocks.Content />
                </div>
        );
    }
});