import { Input } from "@mui/material";
import React from "react";
import { Flex } from "../styles/flex";
import { CTA } from "../buttons/button";
import spacing from "../styles/spacing";
import colors from "../styles/colors";
var Form = function (props) {
    var _a = React.useState(""), name = _a[0], setName = _a[1];
    var _b = React.useState(""), email = _b[0], setEmail = _b[1];
    var handleSubmit = function (event) {
        event.preventDefault();
    };
    return (React.createElement("div", null,
        React.createElement(Flex, { flexDirection: "column", alignItems: "center", justifyContent: "center", gap: spacing.m },
            React.createElement("form", { onSubmit: handleSubmit, style: { display: "flex", flexDirection: "column", gap: spacing.m } },
                React.createElement(Input, { style: {
                        borderRadius: 4,
                        height: 32,
                        width: 350,
                        padding: 16,
                        color: colors.text,
                        backgroundColor: colors.darkestBlue,
                    }, value: name, spellCheck: "true", placeholder: "Write item", onChange: function (event) {
                        setName(event.target.value);
                    } }),
                React.createElement(Flex, { flexDirection: "row-reverse", justifyContent: "flexEnd", gap: 16 },
                    " ",
                    React.createElement(CTA, { variant: "primary", buttonSize: "lg", type: "submit", disabled: name === "", onClick: function () {
                            var _a;
                            var object = {
                                id: Date.now(),
                                name: name,
                                userEmail: email,
                            };
                            (_a = props === null || props === void 0 ? void 0 : props.onSend) === null || _a === void 0 ? void 0 : _a.call(props, object);
                            setEmail("");
                            setName("");
                        } }, "Add Item"),
                    React.createElement(CTA, { variant: "secondary", buttonSize: "lg", onClick: function () {
                            props.onClear([]);
                        } }, "Clear list"))))));
};
export { Form };
