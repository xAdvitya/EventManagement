import React from 'react'

const Selector = (props)=> {
    return (
<div>
    <select name="eventType" onChange={props.handelChange}>
    <option value="ALLEVENTS">ALLEVENTS</option>
    <option value="VERIFIED">VERIFIED</option>
    <option value="UNVERIFIED">UNVERIFIED</option>
    </select>
</div>)
}

export default Selector
