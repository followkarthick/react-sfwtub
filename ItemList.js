import React, { Component } from 'react'; 
import CheckBList from './CheckBList';
 
 export default class ItemList extends Component {
                constructor(props) {
                    super(props);

                    this.state = {
                        isAllSelected: false,
                        checkList: [
                            {
                                name: "city",
                                value: "bangalore",
                                
                            },
                            {
                                name: "city",
                                value: "chennai",
                                
                            },
                            {
                                name: "city",
                                value: "delhi",
                                
                            }
                        ]
                    };
                }


                onCheckBoxChange(checkName, isChecked) {
                    let isAllChecked = (checkName === 'all' && isChecked);
                    let isAllUnChecked = (checkName === 'all' && !isChecked);
                    const checked = isChecked;

                    const checkList = this.state.checkList.map((city, index) => {
                        if(isAllChecked || city.value === checkName) {
                            return Object.assign({}, city, {
                                checked,
                            });
                        } else if (isAllUnChecked) {
                            return Object.assign({}, city, {
                                checked: false,
                            });
                        }

                        return city;
                    });

                    let isAllSelected = (checkList.findIndex((item) => item.checked === false) === -1) || isAllChecked;

                    this.setState({
                        checkList,
                        isAllSelected,
                    });

                }

                render() {
                    return (<div><CheckBList options={this.state.checkList} isCheckedAll={this.state.isAllSelected} onCheck={this.onCheckBoxChange.bind(this)} /></div>);
                }
            }