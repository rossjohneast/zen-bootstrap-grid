const sharedColWidthClassnames = (props) => {
    return (
       [

        [`${props.attributes.colWidth !== undefined ? `col-${props.attributes.colWidth}` : ''}`],
        [`${props.attributes.colWidthSm !== undefined ? `col-sm-${props.attributes.colWidthSm}` : ''}`],
        [`${props.attributes.colWidthMd !== undefined ? `col-md-${props.attributes.colWidthMd}` : ''}`],
        [`${props.attributes.colWidthLg !== undefined ? `col-lg-${props.attributes.colWidthLg}` : ''}`],
        [`${props.attributes.colWidthXl !== undefined ? `col-xl-${props.attributes.colWidthXl}` : ''}`],
        [`${props.attributes.colWidthXxl !== undefined ? `col-xxl-${props.attributes.colWidthXxl}` : ''}`],

       ]
    )

}

export default sharedColWidthClassnames;