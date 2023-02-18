import block_icons from "../block-icons";
const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;
const { InspectorControls, RichText, URLInput } = wp.blockEditor;
const {
  Panel,
  PanelBody,
  PanelRow,
  Button,
  FormToggle,
  SelectControl,
  RangeControl,
} = wp.components;

import classnames from "classnames";
registerBlockType("zenbsblocks/responsive-spacer", {
  title: __("Responsive spacer", "zenbsblocks"),
  description: __("Responsive vertical spacer.", "zenbsblocks"),
  category: "zenbsblocks",
  icon: block_icons.button,
  attributes: {
    id: {
      type: "number",
    },
    minHeightCol: {
      type: "number",
    },
  },
  edit: (props, isSelected) => {
    const style = {
      minHeight: props.attributes.minHeightCol,
    };

    return [
      <InspectorControls>
        <Panel>
          <PanelBody title={__("Button Settings", "zenbsblocks")}>
            <PanelRow className="w-100">
              <RangeControl
                label={__("Min height", "zenbsblocks")}
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
            </PanelRow>
          </PanelBody>
        </Panel>
      </InspectorControls>,

      <span className={props.className}>
        <RichText
          className={classnames(
            "btn",
            [
              `${
                props.attributes.btnStyle !== undefined
                  ? `${props.attributes.btnStyle}`
                  : ""
              }`,
            ],
            [
              `${
                props.attributes.btnSize !== undefined
                  ? `${props.attributes.btnSize}`
                  : ""
              }`,
            ],
            [
              `${
                props.attributes.btnWidth !== undefined
                  ? `${props.attributes.btnWidth}`
                  : ""
              }`,
            ]
          )}
          placeholder={__("Add button text and link", "zenbsblocks")}
          value={props.attributes.content}
          onChange={(new_val) => props.setAttributes({ content: new_val })}
          allowedFormats={[]}
          keepPlaceholderOnFocus
        />
      </span>,
    ];
  },
  save: (props) => {
    return (
      <a
        className={classnames(
          "btn",
          [
            `${
              props.attributes.btnStyle !== undefined
                ? `${props.attributes.btnStyle}`
                : ""
            }`,
          ],
          [
            `${
              props.attributes.btnSize !== undefined
                ? `${props.attributes.btnSize}`
                : ""
            }`,
          ],
          [
            `${
              props.attributes.btnWidth !== undefined
                ? `${props.attributes.btnWidth}`
                : ""
            }`,
          ]
        )}
        href={props.attributes.url}
        target={props.attributes.href_target ? "_blank" : null}
        rel={props.attributes.href_rel ? "noopener" : null}
      >
        {props.attributes.content}
      </a>
    );
  },
});
