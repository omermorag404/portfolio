import { Input } from "@mui/material";
import React from "react";
import { CTA } from "../buttons/button";
import colors from "../styles/colors";
import { Flex } from "../styles/flex";
import spacing from "../styles/spacing";
const Form = (props) => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
    };
    return (React.createElement("div", null,
        React.createElement(Flex, { flexDirection: "column", alignItems: "center", justifyContent: "center", gap: spacing.m, flexSrink: "1" },
            React.createElement("form", { onSubmit: handleSubmit, style: { display: "flex", flexDirection: "column", gap: spacing.m } },
                React.createElement(Input, { sx: {
                        width: "300px",
                    }, inputProps: { style: { color: colors.purple100 } }, value: name, spellCheck: "true", placeholder: "Write item", onChange: (event) => {
                        setName(event.target.value);
                    } }),
                React.createElement(Flex, { flexDirection: "row-reverse", justifyContent: "flexEnd", gap: 16 },
                    " ",
                    React.createElement(CTA, { variant: "primary", buttonSize: "lg", type: "submit", disabled: name === "", onClick: () => {
                            var _a;
                            const object = {
                                id: Date.now(),
                                name: name,
                                userEmail: email,
                            };
                            (_a = props === null || props === void 0 ? void 0 : props.onSend) === null || _a === void 0 ? void 0 : _a.call(props, object);
                            setEmail("");
                            setName("");
                        } }, "Add Item"),
                    React.createElement(CTA, { variant: "secondary", buttonSize: "lg", onClick: () => {
                            props.onClear([]);
                        } }, "Clear list"))))));
};
export { Form };
