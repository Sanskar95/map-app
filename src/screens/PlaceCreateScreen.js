import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/styles";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Redirect} from "react-router-dom";
toast.configure();

const styles = () => ({
    textField: {
        marginTop: "1rem",
    },
});

class CreateFinancialRequestScreen extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            city: null,
            countryCode: null,
            fromDate: null,
            toDate: null,
            visitorId: null
        };
    }

    handleSelectChange = (event) => {
        this.setState({ requestingDepartment: event.target.value });
    };

    handleTextFieldChange = (event) => {
        console.log(event.target.id);
        this.setState({ [event.target.id]: event.target.value });
    };

    handleCreate = () => {
        // createFinancialRequest(this.state)
        //     .then(() => {
        //         toast.success("Requested created successfully");
        //     })
        //     .catch(() => {
        //         toast.error("Something  went wrong!");
        //     });
    };

    render() {
        if(localStorage.getItem('role')===null){
            console.log(localStorage.getItem('role'))
            return <Redirect to='/'/>;
        }

        const { classes } = this.props;
        return (
            <div>
                <div style={{ display: "inline-block", marginTop: "5rem" }}>
                    <h2>Create Place</h2>
                    <form style={{ margin: "4rem" }}>
                        {/*<InputLabel style={{ textAlign: "left" }}>*/}
                        {/*    Requesting Department*/}
                        {/*</InputLabel>*/}
                        {/*<Select*/}
                        {/*    className={classes.textField}*/}
                        {/*    id="requestingDepartment"*/}
                        {/*    fullWidth={true}*/}
                        {/*    variant="outlined"*/}
                        {/*    value={this.state.requestingDepartment}*/}
                        {/*    onChange={this.handleSelectChange}*/}
                        {/*>*/}
                        {/*    <MenuItem value={"Administration"}>Administration</MenuItem>*/}
                        {/*    <MenuItem value={"Service"}>Service</MenuItem>*/}
                        {/*    <MenuItem value={"Financial"}>Financial</MenuItem>*/}
                        {/*    <MenuItem value={"Production"}>Production</MenuItem>*/}
                        {/*</Select>*/}
                        <TextField
                            className={classes.textField}
                            fullWidth={true}
                            id="countryCode"
                            label="Country Code"
                            onChange={this.handleTextFieldChange}
                        />

                        <TextField
                            className={classes.textField}
                            fullWidth={true}
                            id="city"
                            label="City"
                            onChange={this.handleTextFieldChange}
                        />


                        <TextField
                            className={classes.textField}
                            fullWidth={true}
                            id="fromDate"
                            label="Form Date"
                            type={"date"}
                            onChange={this.handleTextFieldChange}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            className={classes.textField}
                            fullWidth={true}
                            id="toDate"
                            label="To Date"

                            type={"date"}
                            onChange={this.handleTextFieldChange}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            className={classes.textField}
                            fullWidth={true}
                            id="reason"
                            label="Reason"
                            multiline
                            variant="outlined"
                            onChange={this.handleTextFieldChange}
                        />
                        <Button
                            className={classes.textField}
                            variant="contained"
                            color="primary"
                            onClick={this.handleCreate}
                        >
                            Create Place
                        </Button>
                    </form>
                </div>
            </div>
        );
    }
}

CreateFinancialRequestScreen.propTypes = {};

export default withStyles(styles)(CreateFinancialRequestScreen);
