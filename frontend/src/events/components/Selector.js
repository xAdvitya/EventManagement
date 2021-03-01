import React from 'react'

const Selector = (props)=> {
    return (
<div class="filter">
    <select name="eventType" onChange={props.handelChange}>
    <option value="ALLEVENTS">All-Events</option>
    <option value="VERIFIED">Verified-Events</option>
    <option value="UNVERIFIED">Unverified-Events</option>
    </select>
</div>)
}

export default Selector
