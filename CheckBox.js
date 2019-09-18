import React, { Component } from 'react'; 

const  CheckBox = ({name, value, tick, onCheck}) => {
                return (
                    <label>
                        <input
                            name={name}
                            type="checkbox"
                            value={value}
                            checked={tick || false}
                            onChange={onCheck}
                        />
                        {value}
                    </label>
                );
            }

export default CheckBox;

