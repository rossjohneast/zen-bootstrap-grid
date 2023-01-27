import block_icons from '../block-icons';
const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;
const { InnerBlocks } = wp.blockEditor;
const { InspectorControls,
    RichText } = wp.blockEditor;
const { Panel, PanelBody,
    PanelRow,
    TextControl,
    SelectControl } = wp.components;

import classnames from 'classnames';

const attributes = {
    id: {
        type: 'string',
    },
    modalOpenLinkType: {
        type: 'string',
        default: 'button',
    },
    linkToggleText: {
        type: 'string',
        source: 'text',
        default: 'Read more',
        selector: '.link-toggle-ph'
    },
    btnToggleText: {
        type: 'string',
        source: 'text',
        default: 'Read more',
        selector: '.btn-toggle-ph'
    },
    btnCloseText: {
        type: 'string',
        source: 'text',
        default: 'Close',
        selector: '.btn-close-ph'
    },
    btnStyleOpen: {
        type: 'string',
        default: 'btn-primary'
    },
    modalSize: {
        type: 'string',
        default: 'modal-lg'
    },
    title: {
        type: 'string',
        source: 'text',
        selector: '.title-ph',
        default: 'Modal title'
    },
}

registerBlockType('zenbsblocks/pop-up-button', {
    title: __('Modal', 'zenbsblocks'),
    description: __('Use Bootstrap’s JavaScript modal plugin to add dialogs to your site for lightboxes, user notifications, or completely custom content.', 'zenbsblocks'),
    category: 'zenbsblocks',
    icon: block_icons.popup,
    attributes,

    edit: (props) => {
        //Set the unique id of each element
        const { attributes, setAttributes, clientId } = props;
        const { id } = attributes;
        if (!id) {
            setAttributes({ id: clientId });
        }
        return [
            <InspectorControls>
                <Panel>
                    <PanelBody title={__('Modal', 'zenbsblocks')}>

                        <PanelRow className="w-100">
                            <SelectControl
                                label={__('Modal link type', 'zenbsblocks')}
                                value={props.attributes.modalOpenLinkType}
                                options={[
                                    { value: 'button', label: 'Default (Button)' },
                                    { value: 'link', label: 'Link' },
                                ]}
                                onChange={(new_val) => {
                                    props.setAttributes({ modalOpenLinkType: new_val })
                                }} />
                        </PanelRow>

                        {props.attributes.modalOpenLinkType == 'button' && (
                        <PanelRow className="w-100">
                            <SelectControl
                                label={__('Button Open Style (Color)', 'zenbsblocks')}
                                value={props.attributes.btnStyleOpen}
                                options={[
                                    { value: 'btn-primary', label: 'Default' },
                                    { value: 'btn-primary', label: 'Primary' },
                                    { value: 'btn-secondary', label: 'Secondary' },
                                    { value: 'btn-success', label: 'Success' },
                                    { value: 'btn-danger', label: 'Danger' },
                                    { value: 'btn-warning', label: 'Warning' },
                                    { value: 'btn-info', label: 'Info' },
                                    { value: 'btn-light', label: 'Light' },
                                    { value: 'btn-dark', label: 'Dark' },
                                    { value: 'btn-white', label: 'White' },
                                    { value: 'btn-outline-primary', label: 'Outline Primary' },
                                    { value: 'btn-outline-secondary', label: 'Outline Secondary' },
                                    { value: 'btn-outline-success', label: 'Outline Success' },
                                    { value: 'btn-outline-danger', label: 'Outline Danger' },
                                    { value: 'btn-outline-warning', label: 'Outline Warning' },
                                    { value: 'btn-outline-info', label: 'Outline Info' },
                                    { value: 'btn-outline-light', label: 'Outline Light' },
                                    { value: 'btn-outline-dark', label: 'Outline Dark' },
                                    { value: 'btn-outline-white', label: 'Outline White' },
                                ]}
                                onChange={(new_val) => {
                                    props.setAttributes({ btnStyleOpen: new_val })
                                }} />
                        </PanelRow>
                        )}


                        <PanelRow className="w-100">
                            <SelectControl
                                label={__('Pop-up size', 'zenbsblocks')}
                                value={props.attributes.modalSize}
                                options={[
                                    { value: 'modal-lg', label: 'Large (Default)' },
                                    { value: 'modal-sm', label: 'Small' },
                                    { value: 'modal-xl', label: 'Extra Large' },
                                ]}
                                onChange={(new_val) => {
                                    props.setAttributes({ modalSize: new_val })
                                }} />
                        </PanelRow>

                    </PanelBody>
                </Panel>

            </InspectorControls>,
            <div>
               
               
               {props.attributes.modalOpenLinkType == 'button' && (
                <button type="button"

                    className={
                        classnames(
                            'btn btn-toggle-ph',
                            [`${props.attributes.btnStyleOpen !== undefined ? `${props.attributes.btnStyleOpen}` : ''}`]
                        )}

                        data-bs-toggle="modal"
                        data-bs-target={"#modal" + props.attributes.id}
                    disabled>

                    <RichText
                        value={props.attributes.btnToggleText}
                        onChange={(new_val) =>
                            props.setAttributes({ btnToggleText: new_val })
                        }
                        allowedFormats={[]}
                        keepPlaceholderOnFocus
                    />
                </button>
                )}

                {props.attributes.modalOpenLinkType == 'link' && (
                    <a href="#" className="link-toggle-ph"
                    data-bs-toggle="modal"
                    data-bs-target={"#modal" + props.attributes.id}
                    >
                        <RichText
                            value={props.attributes.linkToggleText}
                            onChange={(new_val) =>
                                props.setAttributes({ linkToggleText: new_val })
                            }
                            allowedFormats={[]}
                            keepPlaceholderOnFocus
                        />
                    </a>
                )}

                <div className="">
                    <div className={"modal-dialog modal-dialog-centered " + props.attributes.modalSize} role="document">
                        <div className="modal-content border p-2">
                            <div className="modal-header">

                            <RichText
                            className="h5 modal-title title-ph"

                            value={props.attributes.title}
                            onChange={(new_val) =>
                                props.setAttributes({ title: new_val })
                            }
                            allowedFormats={[]}
                            keepPlaceholderOnFocus
                        />
                            

                                {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" disabled>
                                </button> */}
                            </div>
                            <div className="mb-2"></div>  
                            <hr/>
                            <div className="modal-body">
                                <InnerBlocks
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        ]
    },
    save: (props) => {
        //Save the unique block id from above
        const { attributes } = props;
        const { id } = attributes;
        return (

            <div>
                {props.attributes.modalOpenLinkType == 'button' && (
                <button type="button"
                    className={
                        classnames(
                            'btn btn-toggle-ph',
                            [`${props.attributes.btnStyleOpen !== undefined ? `${props.attributes.btnStyleOpen}` : ''}`]
                        )}
                    data-bs-toggle="modal"
                    data-bs-target={"#modal" + props.attributes.id}>
                    {props.attributes.btnToggleText}
                </button>
                )}

                {props.attributes.modalOpenLinkType == 'link' && (
                    <a href="#" className="link-toggle-ph"
                        data-bs-toggle="modal"
                        data-bs-target={"#modal" + props.attributes.id}
                    >
                        {props.attributes.linkToggleText}
                    </a>
                )}

                <div className="modal fade zenbsblocks-modal" id={"modal" + props.attributes.id} tabindex="-1" role="dialog" aria-labelledby={"modal" + props.attributes.id} aria-hidden="true">
                    <div className={"modal-dialog " + props.attributes.modalSize} role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                            <h5 class="modal-title title-ph">{props.attributes.title}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                </button>
                            </div>
                            <div className="modal-body">
                                <InnerBlocks.Content />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
});