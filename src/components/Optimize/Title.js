import React from "react"

const Title = () => {
    console.log("rendering title")
    return(
        <div>
            UseCallback Hook
        </div>
    )
}

export default React.memo(Title) 