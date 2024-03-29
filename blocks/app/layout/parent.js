import block_icons from "../block-icons";

const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;
const {
  InnerBlocks,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
  PanelColorSettings,
} = wp.blockEditor;
const { PanelBody, PanelRow, Button, SelectControl, RangeControl } =
  wp.components;

import classnames from "classnames";
import sharedAnimationsInspCnt from "../shared/animation/aos-insp-cnt.js";

const attributes = {
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
  paddingSection: {
    type: "number",
  },
  textColor: {
    type: "string",
  },
  minHeightSection: {
    type: "number",
  },
  backgroundColorTheme: {
    type: "string",
  },
  textColorTheme: {
    type: "string",
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

registerBlockType("zenbsgridblocks/section", {
  title: __("Section Layout", "zenbsgridblocks"),
  description: __(
    "Build layouts of all shapes and sizes thanks to a twelve column system and six default responsive tiers. ",
    "zenbsgridblocks"
  ),
  category: "zenbsgridblocks",
  icon: block_icons.div,

  attributes,

  edit: (props) => {
    const { attributes, setAttributes, textColor, backgroundColor } = props;

    const style = {
      backgroundColor: props.attributes.backgroundColor,
      color: props.attributes.textColor,
      backgroundSize: props.attributes.backgroundImageSize,
      backgroundAttachment: props.attributes.backgroundImageAttachment,
      backgroundRepeat: props.attributes.backgroundImageRepeat,
      minHeight: props.attributes.minHeightSection,
      backgroundPosition: props.attributes.backgroundImagePos,
    };

    function onImageSelect(imageObject) {
      setAttributes({
        backgroundImage: imageObject.sizes.full.url,
      });
    }

    const onRemoveImage = () => {
      setAttributes({
        backgroundImage: null,
      });
    };

    //Only use the background inline style if its not null
    let BackgroundIsActive = "";
    if (props.attributes.backgroundImage !== null) {
      BackgroundIsActive = {
        backgroundImage: `url( ${props.attributes.backgroundImage} )`,
      };
    }

    return [
      <InspectorControls>
        <PanelBody title={__("Section options", "zenbsgridblocks")}>
          <RangeControl
            label={__("Padding Y (top & bottom)", "zenbsgridblocks")}
            min={0}
            max={5}
            allowReset={true}
            resetFallbackValue={undefined}
            value={props.attributes.paddingSection}
            onChange={(new_val) => {
              props.setAttributes({ paddingSection: new_val });
            }}
          />

          <RangeControl
            label={__("Minimum height", "zenbsgridblocks")}
            min={0}
            max={2000}
            step={5}
            allowReset={true}
            resetFallbackValue={"0"}
            value={props.attributes.minHeightSection}
            onChange={(new_val) => {
              props.setAttributes({ minHeightSection: new_val });
            }}
          />
        </PanelBody>

        <PanelBody
          title={__("Section Bootstrap colors", "zenbsgridblocks")}
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
              label={__("Text Color", "zenbsgridblocks")}
              value={props.attributes.textColorTheme}
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
          title={__("Section Custom color settings", "zenbsgridblocks")}
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
          title={__("Section Background image", "zenbsgridblocks")}
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
              {" "}
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
              label={__("Background fixed", "zenbsgridblocks")}
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
              label={__("Background tint", "zenbsgridblocks")}
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
              label={__("Background size", "zenbsgridblocks")}
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
              label={__("Background repeat", "zenbsgridblocks")}
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
              label={__("Background image position", "zenbsgridblocks")}
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
        {sharedAnimationsInspCnt(props)}
      </InspectorControls>,

      <div className={props.className}>
        <section
          className={classnames(
            "section",
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
                props.attributes.paddingSection !== undefined
                  ? `py-${props.attributes.paddingSection}`
                  : ""
              }`,
            ],
            [
              `${
                props.attributes.backgroundImageTint !== undefined
                  ? `${props.attributes.backgroundImageTint}`
                  : ""
              }`,
            ]
          )}
          style={{
            ...style,
            ...BackgroundIsActive,
          }}
        >
          <InnerBlocks
            allowedBlocks={[
              "zenbsgridblocks/container",
              "zenbsgridblocks/responsive-spacer",
            ]}
            template={[
              ["zenbsgridblocks/responsive-spacer"],
              ["zenbsgridblocks/container"],
              ["zenbsgridblocks/responsive-spacer"],
            ]}
          />
        </section>
      </div>,
    ];
  },
  save(props) {
    const { attributes } = props;

    //Only use the background inline style if its not null
    let BackgroundIsActive = "";
    if (props.attributes.backgroundImage !== null) {
      BackgroundIsActive = {
        backgroundImage: `url( ${props.attributes.backgroundImage} )`,
      };
    }

    const style = {
      backgroundColor: props.attributes.backgroundColor,
      color: props.attributes.textColor,
      backgroundSize: props.attributes.backgroundImageSize,
      backgroundAttachment: props.attributes.backgroundImageAttachment,
      backgroundRepeat: props.attributes.backgroundImageRepeat,
      minHeight: props.attributes.minHeightSection,
      backgroundPosition: props.attributes.backgroundImagePos,
    };

    return (
      <div>
        <section
          className={classnames(
            "section",
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
                props.attributes.paddingSection !== undefined
                  ? `py-${props.attributes.paddingSection}`
                  : ""
              }`,
            ],
            [
              `${
                props.attributes.backgroundImageTint !== undefined
                  ? `${props.attributes.backgroundImageTint}`
                  : ""
              }`,
            ]
          )}
          style={{
            ...style,
            ...BackgroundIsActive,
          }}

          {...props.attributes.animation && {'data-aos' : props.attributes.animation}}
          {...props.attributes.animationOffset && props.attributes.animation && {'data-aos-offset' : props.attributes.animationOffset}}
          {...props.attributes.animationDuration && props.attributes.animation  && {'data-aos-duration' : props.attributes.animationDuration}}
          {...props.attributes.animationDelay && props.attributes.animation  && {'data-aos-delay' : props.attributes.animationDelay}}
          {...props.attributes.animationEasing && props.attributes.animation  && {'data-aos-easing' : props.attributes.animationEasing}}
          {...props.attributes.animationOnce && props.attributes.animation  && {'data-aos-once' : props.attributes.animationOnce}}
          {...props.attributes.animationMirror && props.attributes.animation  && {'data-aos-mirror' : props.attributes.animationMirror}}
          {...props.attributes.animationPlacement && props.attributes.animation  && {'data-aos-anchor-placement' : props.attributes.animationPlacement}}
          

        >
          <InnerBlocks.Content />
        </section>
      </div>
    );
  },
});
