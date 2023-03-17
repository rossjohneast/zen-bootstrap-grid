import block_icons from '../block-icons';
const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;
const { InnerBlocks,
    InspectorControls,
    MediaUpload,
    MediaUploadCheck,
    PanelColorSettings } = wp.blockEditor;
const {
    PanelBody,
    PanelRow,
    Button,
    RangeControl,
    SelectControl } = wp.components;

import classnames from 'classnames';
import sharedPaddingInspCnt from '../shared/padding/padding-insp-cnt.js';
import sharedPaddingClassnames from '../shared/padding/padding-classnames.js';
import sharedMarginInspCnt from '../shared/margin/margin-insp-cnt.js';
import sharedMarginClassnames from '../shared/margin/margin-classnames.js';
import sharedAnimationsInspCnt from '../shared/animation/aos-insp-cnt.js';
const attributes = {
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
    backgroundImageTint: {
        type: 'string',
    },
    textColor: {
        type: 'string'
    },
    backgroundColorTheme: {
        type: 'string'
    },
    textColorTheme: {
        type: 'string'
    },
    columnGutterWidth: {
        type: 'number'
    },
    minHeightRow: {
        type: 'number'
    },
    margin: {
        type: 'number'
    },
    marginT: {
        type: 'number'
    },
    marginB: {
        type: 'number'
    },
    marginL: {
        type: 'number'
    },
    marginR: {
        type: 'number'
    },
    marginX: {
        type: 'number'
    },
    marginY: {
        type: 'number'
    },
    marginSM: {
        type: 'number'
    },
    marginSMT: {
        type: 'number'
    },
    marginSMB: {
        type: 'number'
    },
    marginSML: {
        type: 'number'
    },
    marginSMR: {
        type: 'number'
    },
    marginSMX: {
        type: 'number'
    },
    marginSMY: {
        type: 'number'
    },
    marginMD: {
        type: 'number'
    },
    marginMDT: {
        type: 'number'
    },
    marginMDB: {
        type: 'number'
    },
    marginMDL: {
        type: 'number'
    },
    marginMDR: {
        type: 'number'
    },
    marginMDX: {
        type: 'number'
    },
    marginMDY: {
        type: 'number'
    },
    marginLG: {
        type: 'number'
    },
    marginLGT: {
        type: 'number'
    },
    marginLGB: {
        type: 'number'
    },
    marginLGL: {
        type: 'number'
    },
    marginLGR: {
        type: 'number'
    },
    marginLGX: {
        type: 'number'
    },
    marginLGY: {
        type: 'number'
    },
    marginXL: {
        type: 'number'
    },
    marginXLT: {
        type: 'number'
    },
    marginXLB: {
        type: 'number'
    },
    marginXLL: {
        type: 'number'
    },
    marginXLR: {
        type: 'number'
    },
    marginXLX: {
        type: 'number'
    },
    marginXLY: {
        type: 'number'
    },
    marginXXL: {
        type: 'number'
    },
    marginXXLT: {
        type: 'number'
    },
    marginXXLB: {
        type: 'number'
    },
    marginXXLL: {
        type: 'number'
    },
    marginXXLR: {
        type: 'number'
    },
    marginXXLX: {
        type: 'number'
    },
    marginXXLY: {
        type: 'number'
    },
    padding: {
        type: 'number'
    },
    paddingT: {
        type: 'number'
    },
    paddingB: {
        type: 'number'
    },
    paddingL: {
        type: 'number'
    },
    paddingR: {
        type: 'number'
    },
    paddingX: {
        type: 'number'
    },
    paddingY: {
        type: 'number'
    },
    paddingSM: {
        type: 'number'
    },
    paddingSMT: {
        type: 'number'
    },
    paddingSMB: {
        type: 'number'
    },
    paddingSML: {
        type: 'number'
    },
    paddingSMR: {
        type: 'number'
    },
    paddingSMX: {
        type: 'number'
    },
    paddingSMY: {
        type: 'number'
    },
    paddingMD: {
        type: 'number'
    },
    paddingMDT: {
        type: 'number'
    },
    paddingMDB: {
        type: 'number'
    },
    paddingMDL: {
        type: 'number'
    },
    paddingMDR: {
        type: 'number'
    },
    paddingMDX: {
        type: 'number'
    },
    paddingMDY: {
        type: 'number'
    },
    paddingLG: {
        type: 'number'
    },
    paddingLGT: {
        type: 'number'
    },
    paddingLGB: {
        type: 'number'
    },
    paddingLGL: {
        type: 'number'
    },
    paddingLGR: {
        type: 'number'
    },
    paddingLGX: {
        type: 'number'
    },
    paddingLGY: {
        type: 'number'
    },
    paddingXL: {
        type: 'number'
    },
    paddingXLT: {
        type: 'number'
    },
    paddingXLB: {
        type: 'number'
    },
    paddingXLL: {
        type: 'number'
    },
    paddingXLR: {
        type: 'number'
    },
    paddingXLX: {
        type: 'number'
    },
    paddingXLY: {
        type: 'number'
    },
    paddingXXL: {
        type: 'number'
    },
    paddingXXLT: {
        type: 'number'
    },
    paddingXXLB: {
        type: 'number'
    },
    paddingXXLL: {
        type: 'number'
    },
    paddingXXLR: {
        type: 'number'
    },
    paddingXXLX: {
        type: 'number'
    },
    paddingXXLY: {
        type: 'number'
    },
    animation:{
        type:           'string',
    },
    animationOffset:{
        type:           'number',
        default: 120
    },
    animationDuration:{
        type:           'number',
        default: 400
    },
    animationDelay:{
        type:           'number',
    },
    animationEasing:{
        type:           'string',
    },
    animationOnce:{
        type:           'boolean',
    },
    animationMirror:{
        type:           'boolean',
    },
    animationPlacement:{
        type:           'string',
    },
    display: {
        type: 'string'
    },
    alignItems: {
        type: 'string'
    },
    justifyContent: {
        type: 'string'
    },
    textAlign: {
        type: 'string'
    },
}

registerBlockType('zenbsgridblocks/row', {
    title: __('Row', 'zenbsgridblocks'),
    description: __('Contains columns. Min 1 column, max 12 columns. Sets gutters.', 'zenbsgridblocks'),
    category: 'zenbsgridblocks',
    icon: block_icons.row,

    attributes,

    edit: (props) => {


        const { attributes, setAttributes, textColor, backgroundColor } = props;

        //Only use the background inline style if its not null
        let BackgroundIsActive = '';
        if (props.attributes.backgroundImage !== null) {
            BackgroundIsActive = {
                backgroundImage: `url( ${props.attributes.backgroundImage} )`
            }
        }


        const style = {
            minHeight: props.attributes.minHeightRow,
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
                <PanelBody title={__('Row quick settings', 'zenbsgridblocks')}>


                    <RangeControl
                        label={__('Minimum height', 'zenbsgridblocks')}
                        min={0}
                        max={2000}
                        step={5}
                        allowReset={true}
                        resetFallbackValue={'0'}
                        value={props.attributes.minHeightRow}
                        onChange={(new_val) => {
                            props.setAttributes({ minHeightRow: new_val })
                        }} />

                    <RangeControl
                        label={__('Column Gutter Width', 'zenbsgridblocks')}
                        min={0}
                        max={4}
                        help={"Space between content columns"}
                        allowReset={true}
                        resetFallbackValue={''}
                        value={props.attributes.columnGutterWidth}
                        onChange={(new_val) => {
                            props.setAttributes({ columnGutterWidth: new_val })
                        }} />

                    <RangeControl
                        label={__('Margin Bottom (Desktop)', 'zenbsgridblocks')}
                        min={0}
                        max={5}
                        allowReset={true}
                        resetFallbackValue={undefined}
                        value={props.attributes.marginLGB}
                        onChange={(new_val) => {
                            props.setAttributes({ marginLGB: new_val })
                        }} />


</PanelBody>
                    <PanelBody title={__('Row Content Display Settings', 'zenbsgridblocks')} initialOpen={false}>
                <PanelRow className="w-100">
                        <SelectControl
                            label={__('Display', 'zenbsgridblocks')}
                            value={props.attributes.display}
                            options={[
                                { value: 'd-flex', label: 'Flex' },
                                { value: 'd-none', label: 'None' },
                                { value: 'd-inline', label: 'Inline' },
                                { value: 'd-inline-block', label: 'Inline-block' },
                                { value: 'd-block', label: 'Block' },
                                { value: 'd-grid', label: 'Grid' },
                                { value: 'd-table', label: 'Table' },
                                { value: 'd-table-cell', label: 'Table-cell' },
                                { value: 'd-table-row', label: 'Table-row' },
                                { value: 'd-inline-flex', label: 'Inline-flex' },
                            ]}
                            onChange={(new_val) => {
                                props.setAttributes({ display: new_val })
                            }} />
                    </PanelRow>

                    
                    <PanelRow className="w-100">
                        <SelectControl
                            label={__('Align Div Text', 'zenbsgridblocks')}
                            value={props.attributes.textAlign}
                            options={[
                                { value: 'text-left', label: 'Left' },
                                { value: 'text-center', label: 'Center' },
                                { value: 'text-right', label: 'Right' },
                            ]}
                            onChange={(new_val) => {
                                props.setAttributes({ textAlign: new_val })
                            }} />
                    </PanelRow>

                    <PanelRow className="w-100">
                        <SelectControl
                            label={__('Align Column Content', 'zenbsgridblocks')}
                            value={props.attributes.alignItems}
                            options={[
                                { value: 'align-items-start', label: 'Start' },
                                { value: 'align-items-end', label: 'End' },
                                { value: 'align-items-center', label: 'Center' },
                                { value: 'align-items-baseline', label: 'Baseline' },
                                { value: 'align-items-stretch', label: 'Stretch' }
                            ]}
                            onChange={(new_val) => {
                                props.setAttributes({ alignItems: new_val })
                            }} />
                    </PanelRow>

                    <PanelRow className="w-100">
                        <SelectControl
                            label={__('Justify Column Content', 'zenbsgridblocks')}
                            value={props.attributes.justifyContent}
                            options={[
                                { value: 'justify-content-start', label: 'Start' },
                                { value: 'justify-content-end', label: 'End' },
                                { value: 'justify-content-center', label: 'Center' },
                                { value: 'justify-content-between', label: 'Space-between' },
                                { value: 'justify-content-around', label: 'Space-around' },
                                { value: 'justify-content-evenly', label: 'Space-evenly' }
                            ]}
                            onChange={(new_val) => {
                                props.setAttributes({ justifyContent: new_val })
                            }} />
                    </PanelRow>
                    </PanelBody>


                <PanelBody title={__('Row Bootstrap colors', 'zenbsgridblocks')} initialOpen={false}>
                    <PanelRow className="w-100">
                        <SelectControl
                            label={__('Background Color', 'zenbsgridblocks')}
                            value={props.attributes.backgroundColorTheme}
                            options={[
                                { value: '', label: 'Default (None)' },
                                { value: 'bg-primary', label: 'Primary' },
                                { value: 'bg-secondary', label: 'Secondary' },
                                { value: 'bg-success', label: 'Success' },
                                { value: 'bg-danger', label: 'Danger' },
                                { value: 'bg-warning', label: 'Warning' },
                                { value: 'bg-info', label: 'Info' },
                                { value: 'bg-light', label: 'Light' },
                                { value: 'bg-dark', label: 'Dark' },
                                { value: 'bg-white', label: 'White' },
                            ]}
                            onChange={(new_val) => {
                                props.setAttributes({ backgroundColorTheme: new_val })
                            }} />
                    </PanelRow>
                    <PanelRow className="w-100">
                        <SelectControl
                            label={__('Text Color', 'zenbsgridblocks')}
                            value={props.attributes.textColorTheme}
                            options={[
                                { value: '', label: 'Default' },
                                { value: 'text-primary', label: 'Primary' },
                                { value: 'text-secondary', label: 'Secondary' },
                                { value: 'text-success', label: 'Success' },
                                { value: 'text-danger', label: 'Danger' },
                                { value: 'text-warning', label: 'Warning' },
                                { value: 'text-info', label: 'Info' },
                                { value: 'text-light', label: 'Light' },
                                { value: 'text-dark', label: 'Dark' },
                                { value: 'text-white', label: 'White' },
                            ]}
                            onChange={(new_val) => {
                                props.setAttributes({ textColorTheme: new_val })
                            }} />
                    </PanelRow>
                </PanelBody>

                <PanelColorSettings
                    title={__('Row Custom color Settings', 'zenbsgridblocks')} initialOpen={false}
                    colorSettings={[
                        {
                            value: backgroundColor,
                            onChange: (colorValue) => setAttributes({ backgroundColor: colorValue }),
                            label: __('Background Color'),
                        },
                        {
                            value: textColor,
                            onChange: (colorValue) => setAttributes({ textColor: colorValue }),
                            label: __('Text Color'),
                        },
                    ]}
                >

                </PanelColorSettings>

                <PanelBody title={__('Row Background image', 'zenbsgridblocks')} initialOpen={false} >
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


                {sharedPaddingInspCnt(props)}

                {sharedMarginInspCnt(props)}



            </InspectorControls>,

            <div className={
                classnames(
                    'row',
                    [`${props.attributes.textColorTheme !== undefined ? `${props.attributes.textColorTheme}` : ''}`],
                    [`${props.attributes.backgroundColorTheme !== undefined ? `${props.attributes.backgroundColorTheme}` : ''}`],
                    [`${props.attributes.columnGutterWidth !== undefined ? `gx-${props.attributes.columnGutterWidth}` : ''}`],
                    sharedPaddingClassnames(props),
                    sharedMarginClassnames(props),
                    [`${props.attributes.backgroundImageTint !== undefined ? `${props.attributes.backgroundImageTint}` : ''}`],
                    [`${props.attributes.justifyContent !== undefined ? `${props.attributes.justifyContent}` : ''}`],
                    [`${props.attributes.alignItems !== undefined ? `${props.attributes.alignItems}` : ''}`],
                    [`${props.attributes.display !== undefined ? `${props.attributes.display}` : ''}`]
                )}
                style={{
                    ...style,
                    ...BackgroundIsActive
                }}>
                <InnerBlocks
                    allowedBlocks={['zenbsgridblocks/col']}
                    template={[
                        ['zenbsgridblocks/col'],
                        ['zenbsgridblocks/col']
                    ]}
                />

            </div>

        ];
    },
    save(props) {
        const { attributes } = props;

        const style = {
            minHeight: props.attributes.minHeightRow,
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
            <div className={
                classnames(
                    'row',
                    [`${props.attributes.textColorTheme !== undefined ? `${props.attributes.textColorTheme}` : ''}`],
                    [`${props.attributes.backgroundColorTheme !== undefined ? `${props.attributes.backgroundColorTheme}` : ''}`],
                    [`${props.attributes.columnGutterWidth !== undefined ? `gx-${props.attributes.columnGutterWidth}` : ''}`],
                    sharedPaddingClassnames(props),
                    sharedMarginClassnames(props),
                    [`${props.attributes.backgroundImageTint !== undefined ? `${props.attributes.backgroundImageTint}` : ''}`],
                    [`${props.attributes.justifyContent !== undefined ? `${props.attributes.justifyContent}` : ''}`],
                    [`${props.attributes.alignItems !== undefined ? `${props.attributes.alignItems}` : ''}`],
                    [`${props.attributes.display !== undefined ? `${props.attributes.display}` : ''}`]
                )}
                style={{
                    ...style,
                    ...BackgroundIsActive
                }}
                
                >
                <InnerBlocks.Content />
            </div>
        )
    }
});