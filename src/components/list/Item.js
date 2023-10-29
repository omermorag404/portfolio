/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Flex } from "../styles/flex";
import { CTA } from "../buttons/button";
import spacing from "../styles/spacing";
import { Crossed, P } from "../styles/typography";
import colors from "../styles/colors";

/* eslint-disable react/display-name */
export default ({ text, onEditDone, onDelete, isChecked, onToggle, id }) => {
  const [isEdit, setIsEdit] = React.useState(false);
  const [inputValue, setInputValue] = React.useState(text);

  // Edit
  if (isEdit) {
    return (
      <div style={{ position: "relative" }}>
        <Flex flexDirection="row" gap={8} position="absolute" top="0" right="0">
          <CTA
            variant="secondary"
            buttonSize="sm"
            onClick={() => {
              setIsEdit((old) => !old);
            }}
          >
            Cancel
          </CTA>
          <CTA
            variant="primary"
            buttonSize="sm"
            onClick={() => {
              setIsEdit((old) => !old);
              onEditDone(inputValue);
            }}
          >
            Save
          </CTA>
        </Flex>
        <Flex
          alignItems="center"
          justifyContent="flexStart"
          flexDirection="row"
        >
          <input
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            onKeyDown={(event) => {
              if (event.keyCode === 13) {
                console.log(inputValue);
                onEditDone(inputValue);
              }
            }}
          ></input>{" "}
        </Flex>
      </div>
    );
  }
  // Checked
  if (isChecked) {
    return (
      <div style={{ position: "relative" }}>
        <Flex
          flexDirection="row"
          gap={8}
          position="absolute"
          top="-6"
          right="0"
        >
          <CTA buttonSize="sm" variant="secondary" onClick={onDelete}>
            Delete
          </CTA>
        </Flex>
        <Flex
          alignItems="center"
          justifyContent="flexStart"
          flexDirection="row"
          backgroundColor={colors.midtBlue}
          gap={8}
          id={id}
          style={{ position: "reletive" }}
        >
          <input
            type="checkbox"
            checked="checked"
            value={isChecked}
            onChange={() => {
              onToggle();
            }}
          />
          <Crossed style={{ wordBreak: "break-all" }}>{text}</Crossed>{" "}
        </Flex>
      </div>
    );
  }
  // default
  return (
    <div style={{ position: "relative" }} id={id}>
      <Flex flexDirection="row" gap={8} position="absolute" top="-6" right="0">
        <CTA buttonSize="sm" variant="secondary" onClick={onDelete}>
          Delete
        </CTA>
        <CTA
          variant="primary"
          buttonSize="sm"
          onClick={() => {
            setIsEdit((old) => !old);
          }}
        >
          Edit
        </CTA>
      </Flex>
      <Flex
        alignItems="center"
        justifyContent="flexStart"
        flexDirection="row"
        backgroundColor={colors.midBlue}
        padding="1.25 0"
        gap={spacing.s}
      >
        <input
          type="checkbox"
          value={isChecked}
          onChange={() => {
            onToggle();
          }}
        />
        <P style={{ wordBreak: "break-all" }}>{text}</P>{" "}
      </Flex>
    </div>
  );
};
