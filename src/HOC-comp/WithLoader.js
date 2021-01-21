import React from 'react'

const WithLoader = EnhancedComponent => (
    function withLoader(props) {
        return(
            props.isLoading
                ? <div>Loading</div>
                : <EnhancedComponent {...props} />
        )
    }
)

export default WithLoader