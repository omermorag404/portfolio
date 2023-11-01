import { Input } from "@mui/material";
import React from "react";
import { Flex } from "../styles/flex";
import { CTA } from "../buttons/button";
import spacing from "../styles/spacing";
import colors from "../styles/colors";
import { red } from "@mui/material/colors";

const Form = (props: any) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  return (
    <div>
      <Flex
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={spacing.m}
        flexSrink="1"
      >
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: spacing.m }}
        >
          <Input
            style={{
              borderRadius: 4,
              height: 32,
              width: 350,
              padding: 16,
              color: colors.text,
              backgroundColor: colors.midBlue,
            }}
            value={name}
            spellCheck="true"
            placeholder="Write item"
            onChange={(event) => {
              setName((event.target as HTMLInputElement).value);
            }}
          />
          <Flex flexDirection="row-reverse" justifyContent="flexEnd" gap={16}>
            {" "}
            <CTA
              variant="primary"
              buttonSize="lg"
              type="submit"
              disabled={name === ""}
              onClick={() => {
                const object = {
                  id: Date.now(),
                  name: name,
                  userEmail: email,
                };
                props?.onSend?.(object);
                setEmail("");
                setName("");
              }}
            >
              Add Item
            </CTA>
            <CTA
              variant="secondary"
              buttonSize="lg"
              onClick={() => {
                props.onClear([]);
              }}
            >
              Clear list
            </CTA>
          </Flex>
        </form>
      </Flex>
    </div>
  );
};
export { Form };
