import React from 'react'

const select = () => (
    <div class="input-field">
        <select multiple>
            <option value="" disabled selected>Choose your option</option>
        </select>
        <label>{this.props.label}</label>
    </div>
)
