import block_icons from "../block-icons";
import "./style.editor.scss";
import "./parent.js";

const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;
const {
  InnerBlocks,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
  PanelColorSettings,
} = wp.blockEditor;
const {
  PanelBody,
  PanelRow,
  Button,
  SelectControl,
  RangeControl,
  FormToggle,
  TabPanel,
} = wp.components;
const { createHigherOrderComponent } = wp.compose;

import classnames from "classnames";
import sharedPaddingInspCnt from "../shared/padding/padding-insp-cnt.js";
import sharedPaddingClassnames from "../shared/padding/padding-classnames.js";
import sharedMarginInspCnt from "../shared/margin/margin-insp-cnt.js";
import sharedMarginClassnames from "../shared/margin/margin-classnames.js";
import sharedColWidthClassnames from "../shared/col/colwidth-classnames.js";
import sharedColOffsetsClassnames from "../shared/col/coloffsets-classnames.js";
import sharedAnimationsInspCnt from "../shared/animation/aos-insp-cnt.js";
const attributes = {
  display: {
    type: "string",
  },
  minHeightCol: {
    type: "number",
  },
  backgroundColor: {
    type: "string",
  },
  backgroundImage: {
    type: "string",
    default: null,
  },
  backgroundImageAttachment: {
    type: "string",
  },
  backgroundImageSize: {
    type: "string",
  },
  backgroundImagePos: {
    type: "string",
  },
  backgroundImageRepeat: {
    type: "string",
  },
  backgroundImageTint: {
    type: "string",
  },
  layoutContainerOption: {
    type: "string",
    default: "container",
  },
  colWidth: {
    type: "number",
  },
  colWidthSm: {
    type: "number",
  },
  colWidthMd: {
    type: "number",
  },
  colWidthLg: {
    type: "number",
  },
  colWidthXl: {
    type: "number",
  },
  colWidthXxl: {
    type: "number",
  },
  colWidthPH: {
    type: "string",
    default: "col-",
  },
  colOffset: {
    type: "number",
  },
  colOffsetSm: {
    type: "number",
  },
  colOffsetMd: {
    type: "number",
  },
  colOffsetLg: {
    type: "number",
  },
  colOffsetXl: {
    type: "number",
  },
  colOffsetXxl: {
    type: "number",
  },
  colOffsetPH: {
    type: "string",
    default: "offset-",
  },
  colRangeSteps: {
    type: "number",
    default: "0",
  },
  textColor: {
    type: "string",
  },
  alignItems: {
    type: "string",
  },
  justifyContent: {
    type: "string",
  },
  textAlign: {
    type: "string",
  },
  backgroundColorTheme: {
    type: "string",
  },
  textColorTheme: {
    type: "string",
  },
  padding: {
    type: "number",
  },
  paddingT: {
    type: "number",
  },
  paddingB: {
    type: "number",
  },
  paddingL: {
    type: "number",
  },
  paddingR: {
    type: "number",
  },
  paddingX: {
    type: "number",
  },
  paddingY: {
    type: "number",
  },
  paddingSM: {
    type: "number",
  },
  paddingSMT: {
    type: "number",
  },
  paddingSMB: {
    type: "number",
  },
  paddingSML: {
    type: "number",
  },
  paddingSMR: {
    type: "number",
  },
  paddingSMX: {
    type: "number",
  },
  paddingSMY: {
    type: "number",
  },
  paddingMD: {
    type: "number",
  },
  paddingMDT: {
    type: "number",
  },
  paddingMDB: {
    type: "number",
  },
  paddingMDL: {
    type: "number",
  },
  paddingMDR: {
    type: "number",
  },
  paddingMDX: {
    type: "number",
  },
  paddingMDY: {
    type: "number",
  },
  paddingLG: {
    type: "number",
  },
  paddingLGT: {
    type: "number",
  },
  paddingLGB: {
    type: "number",
  },
  paddingLGL: {
    type: "number",
  },
  paddingLGR: {
    type: "number",
  },
  paddingLGX: {
    type: "number",
  },
  paddingLGY: {
    type: "number",
  },
  paddingXL: {
    type: "number",
  },
  paddingXLT: {
    type: "number",
  },
  paddingXLB: {
    type: "number",
  },
  paddingXLL: {
    type: "number",
  },
  paddingXLR: {
    type: "number",
  },
  paddingXLX: {
    type: "number",
  },
  paddingXLY: {
    type: "number",
  },
  paddingXXL: {
    type: "number",
  },
  paddingXXLT: {
    type: "number",
  },
  paddingXXLB: {
    type: "number",
  },
  paddingXXLL: {
    type: "number",
  },
  paddingXXLR: {
    type: "number",
  },
  paddingXXLX: {
    type: "number",
  },
  paddingXXLY: {
    type: "number",
  },
  margin: {
    type: "number",
  },
  marginT: {
    type: "number",
  },
  marginB: {
    type: "number",
  },
  marginL: {
    type: "number",
  },
  marginR: {
    type: "number",
  },
  marginX: {
    type: "number",
  },
  marginY: {
    type: "number",
  },
  marginSM: {
    type: "number",
  },
  marginSMT: {
    type: "number",
  },
  marginSMB: {
    type: "number",
  },
  marginSML: {
    type: "number",
  },
  marginSMR: {
    type: "number",
  },
  marginSMX: {
    type: "number",
  },
  marginSMY: {
    type: "number",
  },
  marginMD: {
    type: "number",
  },
  marginMDT: {
    type: "number",
  },
  marginMDB: {
    type: "number",
  },
  marginMDL: {
    type: "number",
  },
  marginMDR: {
    type: "number",
  },
  marginMDX: {
    type: "number",
  },
  marginMDY: {
    type: "number",
  },
  marginLG: {
    type: "number",
  },
  marginLGT: {
    type: "number",
  },
  marginLGB: {
    type: "number",
  },
  marginLGL: {
    type: "number",
  },
  marginLGR: {
    type: "number",
  },
  marginLGX: {
    type: "number",
  },
  marginLGY: {
    type: "number",
  },
  marginXL: {
    type: "number",
  },
  marginXLT: {
    type: "number",
  },
  marginXLB: {
    type: "number",
  },
  marginXLL: {
    type: "number",
  },
  marginXLR: {
    type: "number",
  },
  marginXLX: {
    type: "number",
  },
  marginXLY: {
    type: "number",
  },
  marginXXL: {
    type: "number",
  },
  marginXXLT: {
    type: "number",
  },
  marginXXLB: {
    type: "number",
  },
  marginXXLL: {
    type: "number",
  },
  marginXXLR: {
    type: "number",
  },
  marginXXLX: {
    type: "number",
  },
  marginXXLY: {
    type: "number",
  },
  animation: {
    type: "string",
  },
  animationOffset: {
    type: "number",
    default: 120,
  },
  animationDuration: {
    type: "number",
    default: 400,
  },
  animationDelay: {
    type: "number",
  },
  animationEasing: {
    type: "string",
  },
  animationOnce: {
    type: "boolean",
  },
  animationMirror: {
    type: "boolean",
  },
  animationPlacement: {
    type: "string",
  },
};

//HOC ELEMENT
//Add child column width classes to HOC parent wp-block, for editor only.
const withClientIdClassNameBlockSec = createHigherOrderComponent(
  (BlockListBlock) => {
    return (props) => {
      return (
        <BlockListBlock
          {...props}
          className={classnames(
            "col",
            sharedColWidthClassnames(props),
            sharedColOffsetsClassnames(props)
          )}
        />
      );
    };
  },
  "withClientIdClassNameBlockSec"
);

wp.hooks.addFilter(
  "editor.BlockListBlock",
  "zenbsgridblocks/section",
  withClientIdClassNameBlockSec
);

registerBlockType("zenbsgridblocks/col", {
  title: __("Column", "zenbsgridblocks"),
  description: __(
    "Use to layout content inside rows. Columns auto size to fill space.",
    "zenbsgridblocks"
  ),
  category: "zenbsgridblocks",
  icon: block_icons.column,
  attributes,

  edit: (props) => {
    const { attributes, setAttributes, textColor, backgroundColor } = props;

    const style = {
      color: props.attributes.textColor,
      minHeight: props.attributes.minHeightCol,
    };

    //Only use the background inline style if its not null
    let BackgroundIsActive = "";
    if (props.attributes.backgroundImage !== null) {
      BackgroundIsActive = {
        backgroundImage: `url( ${props.attributes.backgroundImage} )`,
      };
    }

    //Only use the inner background inline style if its not null
    let colInnerBackgroundIsActive = "";
    if (props.attributes.innerColBackgroundImage !== null) {
      colInnerBackgroundIsActive = {
        backgroundImage: `url( ${props.attributes.innerColBackgroundImage} )`,
      };
    }

    const colStyleOuter = {
      backgroundColor: props.attributes.backgroundColor,
      color: props.attributes.textColor,
      backgroundSize: props.attributes.backgroundImageSize,
      backgroundAttachment: props.attributes.backgroundImageAttachment,
      backgroundRepeat: props.attributes.backgroundImageRepeat,
      backgroundPosition: props.attributes.backgroundImagePos,
    };

    function onImageSelect(imageObject) {
      setAttributes({
        backgroundImage: imageObject.sizes.full.url,
      });
    }

    const onRemoveImage = () => {
      setAttributes({
        //Remove image
        backgroundImage: null,
      });
    };

    function onInnerColImageSelect(imageObject) {
      setAttributes({
        innerColBackgroundImage: imageObject.sizes.full.url,
      });
    }

    const onInnerColRemoveImage = () => {
      setAttributes({
        //Remove image
        innerColBackgroundImage: null,
      });
    };

    return [
      <InspectorControls>
        <PanelBody title={__("Column quick settings", "zenbsgridblocks")}>
          <RangeControl
            label={__("Column Width (LG: Desktop and up)", "zenbsgridblocks")}
            min={0}
            max={12}
            step={1}
            showTooltip={true}
            allowReset={true}
            resetFallbackValue={undefined}
            value={props.attributes.colWidthLg}
            onChange={(new_val_w) => {
              props.setAttributes({ colWidthLg: new_val_w });
            }}
          />

          <RangeControl
            label={__("Minimum height", "zenbsgridblocks")}
            min={0}
            max={2000}
            step={5}
            allowReset={true}
            resetFallbackValue={"0"}
            value={props.attributes.minHeightCol}
            onChange={(new_val) => {
              props.setAttributes({ minHeightCol: new_val });
            }}
          />

          <RangeControl
            label={__("Margin Bottom (LG: Desktop and up)", "zenbsgridblocks")}
            min={0}
            max={5}
            allowReset={true}
            resetFallbackValue={undefined}
            value={props.attributes.marginLGB}
            onChange={(new_val) => {
              props.setAttributes({ marginLGB: new_val });
            }}
          />

          <RangeControl
            label={__("Padding", "zenbsgridblocks")}
            min={0}
            max={5}
            allowReset={true}
            resetFallbackValue={undefined}
            value={props.attributes.padding}
            onChange={(new_val) => {
              props.setAttributes({ padding: new_val });
            }}
          />
        </PanelBody>
        <PanelBody
          title={__("Column Content Display Settings", "zenbsgridblocks")}
          initialOpen={false}
        >
          <PanelRow className="w-100">
            <SelectControl
              label={__("Display", "zenbsgridblocks")}
              value={props.attributes.display}
              options={[
                { value: "d-block", label: "Block" },
                { value: "d-none", label: "None" },
                { value: "d-inline", label: "Inline" },
                { value: "d-inline-block", label: "Inline-block" },
                { value: "d-grid", label: "Grid" },
                { value: "d-table", label: "Table" },
                { value: "d-table-cell", label: "Table-cell" },
                { value: "d-table-row", label: "Table-row" },
                { value: "d-flex", label: "Flex" },
                { value: "d-inline-flex", label: "Inline-flex" },
              ]}
              onChange={(new_val) => {
                props.setAttributes({ display: new_val });
              }}
            />
          </PanelRow>

          <PanelRow className="w-100">
            <SelectControl
              label={__("Align Column Text", "zenbsgridblocks")}
              value={props.attributes.textAlign}
              options={[
                { value: "text-left", label: "Left" },
                { value: "text-center", label: "Center" },
                { value: "text-right", label: "Right" },
              ]}
              onChange={(new_val) => {
                props.setAttributes({ textAlign: new_val });
              }}
            />
          </PanelRow>

          <PanelRow className="w-100">
            <SelectControl
              label={__("Align Column Content", "zenbsgridblocks")}
              value={props.attributes.alignItems}
              options={[
                { value: "align-items-start", label: "Start" },
                { value: "align-items-end", label: "End" },
                { value: "align-items-center", label: "Center" },
                { value: "align-items-baseline", label: "Baseline" },
                { value: "align-items-stretch", label: "Stretch" },
              ]}
              onChange={(new_val) => {
                props.setAttributes({ alignItems: new_val });
              }}
            />
          </PanelRow>

          <PanelRow className="w-100">
            <SelectControl
              label={__("Justify Column Content", "zenbsgridblocks")}
              value={props.attributes.justifyContent}
              options={[
                { value: "justify-content-start", label: "Start" },
                { value: "justify-content-end", label: "End" },
                { value: "justify-content-center", label: "Center" },
                { value: "justify-content-between", label: "Space-between" },
                { value: "justify-content-around", label: "Space-around" },
                { value: "justify-content-evenly", label: "Space-evenly" },
              ]}
              onChange={(new_val) => {
                props.setAttributes({ justifyContent: new_val });
              }}
            />
          </PanelRow>
        </PanelBody>

        <PanelBody
          title={__("Column Bootstrap Colors", "zenbsgridblocks")}
          initialOpen={false}
        >
          <PanelRow className="w-100">
            <SelectControl
              label={__("Background Color", "zenbsgridblocks")}
              value={props.attributes.backgroundColorTheme}
              options={[
                { value: "", label: "Default (None)" },
                { value: "bg-primary", label: "Primary" },
                { value: "bg-secondary", label: "Secondary" },
                { value: "bg-success", label: "Success" },
                { value: "bg-danger", label: "Danger" },
                { value: "bg-warning", label: "Warning" },
                { value: "bg-info", label: "Info" },
                { value: "bg-light", label: "Light" },
                { value: "bg-dark", label: "Dark" },
                { value: "bg-white", label: "White" },
              ]}
              onChange={(new_val) => {
                props.setAttributes({ backgroundColorTheme: new_val });
              }}
            />
          </PanelRow>
          <PanelRow className="w-100">
            <SelectControl
              value={props.attributes.textColorTheme}
              label={__("Text Color", "zenbsgridblocks")}
              options={[
                { value: "", label: "Default" },
                { value: "text-primary", label: "Primary" },
                { value: "text-secondary", label: "Secondary" },
                { value: "text-success", label: "Success" },
                { value: "text-danger", label: "Danger" },
                { value: "text-warning", label: "Warning" },
                { value: "text-info", label: "Info" },
                { value: "text-light", label: "Light" },
                { value: "text-dark", label: "Dark" },
                { value: "text-white", label: "White" },
              ]}
              onChange={(new_val) => {
                props.setAttributes({ textColorTheme: new_val });
              }}
            />
          </PanelRow>
        </PanelBody>

        <PanelColorSettings
          title={__("Column Custom colors", "zenbsgridblocks")}
          initialOpen={false}
          colorSettings={[
            {
              value: backgroundColor,
              onChange: (colorValue) =>
                setAttributes({ backgroundColor: colorValue }),
              label: __("Background Color"),
            },
            {
              value: textColor,
              onChange: (colorValue) =>
                setAttributes({ textColor: colorValue }),
              label: __("Text Color"),
            },
          ]}
        ></PanelColorSettings>

        <PanelBody
          title={__("Column Background image", "zenbsgridblocks")}
          initialOpen={false}
        >
          {!!attributes.backgroundImage == "" && (
            <PanelRow>
              <MediaUploadCheck>
                <MediaUpload
                  onSelect={onImageSelect}
                  type="image"
                  value={attributes.backgroundImage}
                  render={({ open }) => (
                    <Button
                      className="components-button editor-post-featured-image__toggle"
                      onClick={open}
                    >
                      Select a background image
                    </Button>
                  )}
                />
              </MediaUploadCheck>
            </PanelRow>
          )}
          {!!attributes.backgroundImage && (
            <PanelRow>
              <MediaUploadCheck>
                <div className="d-flex flex-wrap">
                  <img
                    src={attributes.backgroundImage}
                    alt={__("Background image", "image-selector-example")}
                  />
                  <Button
                    className="components-button block-library-cover__reset-button is-secondary is-small"
                    onClick={onRemoveImage}
                  >
                    {__("Clear Media", "zenbsgridblocks")}
                  </Button>
                </div>
              </MediaUploadCheck>
            </PanelRow>
          )}

          <PanelRow className="w-100">
            <SelectControl
              label={__("Background Fixed", "zenbsgridblocks")}
              value={props.attributes.backgroundImageAttachment}
              options={[
                { value: "initial", label: "Initial" },
                { value: "fixed", label: "Fixed" },
              ]}
              onChange={(new_val) => {
                props.setAttributes({ backgroundImageAttachment: new_val });
              }}
            />
          </PanelRow>

          <PanelRow className="w-100">
            <SelectControl
              label={__("Background Tint", "zenbsgridblocks")}
              value={props.attributes.backgroundImageTint}
              options={[
                { value: "", label: "Tint None" },
                { value: "tint tint-01", label: "10%" },
                { value: "tint tint-02", label: "20%" },
                { value: "tint tint-03", label: "30%" },
                { value: "tint tint-04", label: "40%" },
                { value: "tint tint-05", label: "50%" },
                { value: "tint tint-06", label: "60%" },
                { value: "tint tint-07", label: "70%" },
                { value: "tint tint-08", label: "80%" },
                { value: "tint tint-09", label: "90%" },
              ]}
              onChange={(new_val) => {
                props.setAttributes({ backgroundImageTint: new_val });
              }}
            />
          </PanelRow>

          <PanelRow className="w-100">
            <SelectControl
              label={__("Background Size", "zenbsgridblocks")}
              value={props.attributes.backgroundImageSize}
              options={[
                { value: "cover", label: "Cover" },
                { value: "contain", label: "Contain" },
                { value: "auto", label: "Auto" },
                { value: "100%", label: "100%" },
              ]}
              onChange={(new_val) => {
                props.setAttributes({ backgroundImageSize: new_val });
              }}
            />
          </PanelRow>

          <PanelRow className="w-100">
            <SelectControl
              label={__("Background Repeat", "zenbsgridblocks")}
              value={props.attributes.backgroundImageRepeat}
              options={[
                { value: "repeat", label: "Repeat" },
                { value: "no-repeat", label: "No-repeat" },
                { value: "repeat-x", label: "Repeat-x" },
                { value: "repeat-y", label: "Repeat-y" },
                { value: "space", label: "Space" },
                { value: "round", label: "Round" },
                { value: "initial", label: "Initial" },
              ]}
              onChange={(new_val) => {
                props.setAttributes({ backgroundImageRepeat: new_val });
              }}
            />
          </PanelRow>

          <PanelRow className="w-100">
            <SelectControl
              label={__("Background Image Position", "zenbsgridblocks")}
              value={props.attributes.backgroundImagePos}
              options={[
                { value: "center center", label: "Center Center" },
                { value: "center top", label: "Center Top" },
                { value: "center bottom", label: "Center Bottom" },
                { value: "left top", label: "Left Top" },
                { value: "left center", label: "Left Center" },
                { value: "left bottom", label: "Left Bottom" },
                { value: "right center", label: "Right Center" },
                { value: "right bottom", label: "Right Bottom" },
              ]}
              onChange={(new_val) => {
                props.setAttributes({ backgroundImagePos: new_val });
              }}
            />
          </PanelRow>
        </PanelBody>

        <PanelBody
          title={__("Column Width", "zenbsgridblocks")}
          initialOpen={false}
        >
          <div className="zen-gut-panel-help">
            <p>
              The smaller grid settings also apply to larger screens unless
              overriden specifically for larger screens. Therefore, you only
              need to use the setting for the smallest device width you want to
              support.
            </p>
          </div>

          <TabPanel
            className="zen-gut-tab-panel"
            activeClass="zen-gut-tab-panel-tab-active-tab"
            tabs={[
              {
                name: "tab0",
                title: block_icons.bpmobile,
                className: "zen-gut-tab-panel-tab",
                content: [
                  <div>
                    <div>
                      <strong>Mobile portrait</strong>
                    </div>
                    <div>Smallest device width and greater</div>
                    <hr></hr>
                  </div>,

                  <RangeControl
                    min={0}
                    max={12}
                    step={1}
                    showTooltip={true}
                    allowReset={true}
                    resetFallbackValue={undefined}
                    value={props.attributes.colWidth}
                    onChange={(new_val_w) => {
                      props.setAttributes({ colWidth: new_val_w });
                    }}
                  />,
                ],
              },
              {
                name: "tab1",
                title: block_icons.bpmobileland,
                className: "zen-gut-tab-panel-tab",
                content: [
                  <div>
                    <div>
                      <strong>Mobile landscape</strong>
                    </div>
                    <div>Width equal or greater than 576px</div>
                    <hr></hr>
                  </div>,
                  <RangeControl
                    min={0}
                    max={12}
                    step={1}
                    showTooltip={true}
                    allowReset={true}
                    resetFallbackValue={undefined}
                    value={props.attributes.colWidthSm}
                    onChange={(new_val_w) => {
                      props.setAttributes({ colWidthSm: new_val_w });
                    }}
                  />,
                ],
              },
              {
                name: "tab2",
                title: block_icons.bptablet,
                className: "zen-gut-tab-panel-tab",
                content: [
                  <div>
                    <div>
                      <strong>Tablet portrait</strong>
                    </div>
                    <div>Width equal or greater than 768px</div>
                    <hr></hr>
                  </div>,
                  <RangeControl
                    min={0}
                    max={12}
                    step={1}
                    showTooltip={true}
                    allowReset={true}
                    resetFallbackValue={undefined}
                    value={props.attributes.colWidthMd}
                    onChange={(new_val_w) => {
                      props.setAttributes({ colWidthMd: new_val_w });
                    }}
                  />,
                ],
              },
              {
                name: "tab3",
                title: block_icons.bplaptop,
                className: "zen-gut-tab-panel-tab",
                content: [
                  <div>
                    <div>
                      <strong>Desktops</strong>
                    </div>
                    <div>Width equal or greater than 992px</div>
                    <hr></hr>
                  </div>,
                  <RangeControl
                    min={0}
                    max={12}
                    step={1}
                    showTooltip={true}
                    allowReset={true}
                    resetFallbackValue={undefined}
                    value={props.attributes.colWidthLg}
                    onChange={(new_val_w) => {
                      props.setAttributes({ colWidthLg: new_val_w });
                    }}
                  />,
                ],
              },
              {
                name: "tab4",
                title: block_icons.bpdesktop,
                className: "zen-gut-tab-panel-tab",
                content: [
                  <div>
                    <div>
                      <strong>Large desktop</strong>
                    </div>
                    <div>Width equal or greater than 1200px</div>
                    <hr></hr>
                  </div>,

                  <RangeControl
                    min={0}
                    max={12}
                    step={1}
                    showTooltip={true}
                    allowReset={true}
                    resetFallbackValue={undefined}
                    value={props.attributes.colWidthXl}
                    onChange={(new_val_w) => {
                      props.setAttributes({ colWidthXl: new_val_w });
                    }}
                  />,
                ],
              },
              {
                name: "tab5",
                title: block_icons.bpdesktopxxl,
                className: "zen-gut-tab-panel-tab",
                content: [
                  <div>
                    <div>
                      <strong>Larger desktop</strong>
                    </div>
                    <div>Width equal or greater than 1400px</div>
                    <hr></hr>
                  </div>,
                  <RangeControl
                    min={0}
                    max={12}
                    step={1}
                    showTooltip={true}
                    allowReset={true}
                    resetFallbackValue={undefined}
                    value={props.attributes.colWidthXxl}
                    onChange={(new_val_w) => {
                      props.setAttributes({ colWidthXxl: new_val_w });
                    }}
                  />,
                ],
              },
            ]}
          >
            {(tab) => <p>{tab.content}</p>}
          </TabPanel>
        </PanelBody>

        <PanelBody
          title={__("Column Offset", "zenbsgridblocks")}
          initialOpen={false}
        >
          <div className="zen-gut-panel-help">
            <p>
              The smaller grid settings also apply to larger screens unless
              overriden specifically for larger screens. Therefore, you only
              need to use the setting for the smallest device width you want to
              support.
            </p>
          </div>

          <TabPanel
            className="zen-gut-tab-panel"
            activeClass="zen-gut-tab-panel-tab-active-tab"
            tabs={[
              {
                name: "tab0",
                title: block_icons.bpmobile,
                className: "zen-gut-tab-panel-tab",
                content: [
                  <div>
                    <div>
                      <strong>Mobile portrait</strong>
                    </div>
                    <div>Smallest device width and greater</div>
                    <hr></hr>
                  </div>,

                  <RangeControl
                    label={__("Offset left", "zenbsgridblocks")}
                    min={0}
                    max={11}
                    step={1}
                    showTooltip={true}
                    allowReset={true}
                    resetFallbackValue={undefined}
                    value={props.attributes.colOffset}
                    onChange={(new_val_w) => {
                      props.setAttributes({ colOffset: new_val_w });
                    }}
                  />,
                ],
              },
              {
                name: "tab1",
                title: block_icons.bpmobileland,
                className: "zen-gut-tab-panel-tab",
                content: [
                  <div>
                    <div>
                      <strong>Mobile landscape</strong>
                    </div>
                    <div>Width equal or greater than 576px</div>
                    <hr></hr>
                  </div>,
                  <RangeControl
                    label={__("Offset left", "zenbsgridblocks")}
                    min={0}
                    max={11}
                    step={1}
                    showTooltip={true}
                    allowReset={true}
                    resetFallbackValue={undefined}
                    value={props.attributes.colOffsetSm}
                    onChange={(new_val_w) => {
                      props.setAttributes({ colOffsetSm: new_val_w });
                    }}
                  />,
                ],
              },
              {
                name: "tab2",
                title: block_icons.bptablet,
                className: "zen-gut-tab-panel-tab",
                content: [
                  <div>
                    <div>
                      <strong>Tablet portrait</strong>
                    </div>
                    <div>Width equal or greater than 768px</div>
                    <hr></hr>
                  </div>,
                  <RangeControl
                    label={__("Offset left", "zenbsgridblocks")}
                    min={0}
                    max={11}
                    step={1}
                    showTooltip={true}
                    allowReset={true}
                    resetFallbackValue={undefined}
                    value={props.attributes.colOffsetMd}
                    onChange={(new_val_w) => {
                      props.setAttributes({ colOffsetMd: new_val_w });
                    }}
                  />,
                ],
              },
              {
                name: "tab3",
                title: block_icons.bplaptop,
                className: "zen-gut-tab-panel-tab",
                content: [
                  <div>
                    <div>
                      <strong>Desktops</strong>
                    </div>
                    <div>Width equal or greater than 992px</div>
                    <hr></hr>
                  </div>,
                  <RangeControl
                    label={__("Offset left", "zenbsgridblocks")}
                    min={0}
                    max={11}
                    step={1}
                    showTooltip={true}
                    allowReset={true}
                    resetFallbackValue={undefined}
                    value={props.attributes.colOffsetLg}
                    onChange={(new_val_w) => {
                      props.setAttributes({ colOffsetLg: new_val_w });
                    }}
                  />,
                ],
              },
              {
                name: "tab4",
                title: block_icons.bpdesktop,
                className: "zen-gut-tab-panel-tab",
                content: [
                  <div>
                    <div>
                      <strong>Large desktop</strong>
                    </div>
                    <div>Width equal or greater than 1200px</div>
                    <hr></hr>
                  </div>,

                  <RangeControl
                    label={__("Offset left", "zenbsgridblocks")}
                    min={0}
                    max={11}
                    step={1}
                    showTooltip={true}
                    allowReset={true}
                    resetFallbackValue={undefined}
                    value={props.attributes.colOffsetXl}
                    onChange={(new_val_w) => {
                      props.setAttributes({ colOffsetXl: new_val_w });
                    }}
                  />,
                ],
              },
              {
                name: "tab5",
                title: block_icons.bpdesktopxxl,
                className: "zen-gut-tab-panel-tab",
                content: [
                  <div>
                    <div>
                      <strong>Larger desktop</strong>
                    </div>
                    <div>Width equal or greater than 1400px</div>
                    <hr></hr>
                  </div>,
                  <RangeControl
                    label={__(
                      "Offset left Xxl (>1400px, larger desktops)",
                      "zenbsgridblocks"
                    )}
                    min={0}
                    max={11}
                    step={1}
                    showTooltip={true}
                    allowReset={true}
                    resetFallbackValue={undefined}
                    value={props.attributes.colOffsetXxl}
                    onChange={(new_val_w) => {
                      props.setAttributes({ colOffsetXxl: new_val_w });
                    }}
                  />,
                ],
              },
            ]}
          >
            {(tab) => <p>{tab.content}</p>}
          </TabPanel>
        </PanelBody>

        {sharedPaddingInspCnt(props)}

        {sharedMarginInspCnt(props)}
      </InspectorControls>,

      <div
        className={classnames(
          "col",
          sharedColWidthClassnames(props),
          sharedColOffsetsClassnames(props),
          [
            `${
              props.attributes.textAlign !== undefined
                ? `${props.attributes.textAlign}`
                : ""
            }`,
          ],
          [
            `${
              props.attributes.display !== undefined
                ? `${props.attributes.display}`
                : ""
            }`,
          ],
          sharedMarginClassnames(props),
          sharedPaddingClassnames(props),
          [
            `${
              props.attributes.textColorTheme !== undefined
                ? `${props.attributes.textColorTheme}`
                : ""
            }`,
          ],
          [
            `${
              props.attributes.backgroundColorTheme !== undefined
                ? `${props.attributes.backgroundColorTheme}`
                : ""
            }`,
          ],
          [
            `${
              props.attributes.backgroundImageTint !== undefined
                ? `${props.attributes.backgroundImageTint}`
                : ""
            }`,
          ],
          [
            `${
              props.attributes.justifyContent !== undefined
                ? `${props.attributes.justifyContent}`
                : ""
            }`,
          ],
          [
            `${
              props.attributes.alignItems !== undefined
                ? `${props.attributes.alignItems}`
                : ""
            }`,
          ]
        )}
        style={
          (style,
          {
            ...style,
            ...colStyleOuter,
            ...BackgroundIsActive,
          })
        }
      >
        <InnerBlocks />
      </div>,
    ];
  },
  save: (props) => {
    const { attributes } = props;

    const style = {
      color: props.attributes.textColor,
      minHeight: props.attributes.minHeightCol,
    };

    //Only use the background inline style if its not null
    let BackgroundIsActive = "";
    if (props.attributes.backgroundImage !== null) {
      BackgroundIsActive = {
        backgroundImage: `url( ${props.attributes.backgroundImage} )`,
      };
    }

    const colStyleOuter = {
      backgroundColor: props.attributes.backgroundColor,
      color: props.attributes.textColor,
      backgroundSize: props.attributes.backgroundImageSize,
      backgroundAttachment: props.attributes.backgroundImageAttachment,
      backgroundRepeat: props.attributes.backgroundImageRepeat,
      backgroundPosition: props.attributes.backgroundImagePos,
    };

    return (
      <div
        className={classnames(
          "col",
          sharedColWidthClassnames(props),
          sharedColOffsetsClassnames(props),
          [
            `${
              props.attributes.textAlign !== undefined
                ? `${props.attributes.textAlign}`
                : ""
            }`,
          ],
          [
            `${
              props.attributes.display !== undefined
                ? `${props.attributes.display}`
                : ""
            }`,
          ],
          sharedMarginClassnames(props),
          sharedPaddingClassnames(props),
          [
            `${
              props.attributes.textColorTheme !== undefined
                ? `${props.attributes.textColorTheme}`
                : ""
            }`,
          ],
          [
            `${
              props.attributes.backgroundColorTheme !== undefined
                ? `${props.attributes.backgroundColorTheme}`
                : ""
            }`,
          ],
          [
            `${
              props.attributes.backgroundImageTint !== undefined
                ? `${props.attributes.backgroundImageTint}`
                : ""
            }`,
          ],
          [
            `${
              props.attributes.justifyContent !== undefined
                ? `${props.attributes.justifyContent}`
                : ""
            }`,
          ],
          [
            `${
              props.attributes.alignItems !== undefined
                ? `${props.attributes.alignItems}`
                : ""
            }`,
          ]
        )}
        style={
          (style,
          {
            ...style,
            ...colStyleOuter,
            ...BackgroundIsActive,
          })
        }
      >
        <InnerBlocks.Content />
      </div>
    );
  },
});
