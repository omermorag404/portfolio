/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import { Link } from "react-router-dom";
import Item from "../components/list/Item";
import { Form } from "../components/list/input";
import colors from "../components/styles/colors";
import spacing from "../components/styles/spacing";
import { H3, H4, P, Pbold } from "../components/styles/typography.js";
import { Flex } from "../components/styles/flex";
import { ListDetails } from "../components/details/details";

const Todo = (props) => {
  const [items, setItems] = React.useState([]);

  const name = props.name;

  const done = props.checked;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: spacing.lg,
        flex: 1,
      }}
    >
      <Flex
        flexDirection="column"
        gap={spacing.s}
        justifyContent={"flexStart"}
        alignItems={"center"}
      >
        <H3 color={colors.purple200}>Todo List</H3>

        <Flex
          style={{
            gap: spacing.xs,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <P>
            You have {items.length - items.filter((i) => i.checked).length}{" "}
          </P>
          <Pbold>tasks left to do</Pbold>{" "}
        </Flex>
      </Flex>
      {/* form */}
      <div>
        <Form
          onSend={(obj) => {
            setItems((prev) => [...prev, obj]);
          }}
          onClear={() => setItems([])}
        />
      </div>
      {/* Items */}
      <div>
        <Flex
          flexDirection="column"
          alignItems={"center"}
          gap={spacing.m}
          borderRadius={"4px"}
          height="450px"
          maxHeight={"50vh"}
          overflowY={" auto"}
          margin={spacing.lg}
          padding={16}
          justifyContent={"flexStart"}
        >
          {[
            ...items.filter((i) => !i.checked),
            ...items.filter((i) => i.checked),
          ].map((someItem, indx) => {
            return (
              <Flex>
                <Flex
                  flexDirection="column"
                  id={someItem.id}
                  style={{
                    width: "315px",
                    border: "1px solid",
                    borderColor: colors.purple100,
                    borderRadius: "4px",
                    padding: spacing.m,
                    backgroundColor: colors.midBlue,
                  }}
                >
                  <Item
                    key={indx + someItem.id}
                    text={someItem.name}
                    isChecked={someItem.checked}
                    onToggle={() => {
                      setItems((old) => {
                        const myIndex = old.findIndex(
                          (i) => i.id === someItem.id
                        );
                        return [
                          ...old.slice(0, myIndex),
                          { ...someItem, checked: !someItem.checked },
                          ...old.slice(myIndex + 1),
                        ];
                      });
                      if (someItem.checked)
                        setTimeout(
                          () =>
                            document
                              .getElementById(someItem.id)
                              .scrollIntoView({ smooth: true }),
                          100
                        );
                    }}
                    onDelete={() => {
                      setItems((old) =>
                        old.filter((i) => i.id !== someItem.id)
                      );
                    }}
                    onEditDone={(updatedText) => {
                      setItems((old) =>
                        old.map((i) =>
                          i.id === someItem.id ? { ...i, name: updatedText } : i
                        )
                      );
                    }}
                  />
                </Flex>
              </Flex>
            );
          })}
        </Flex>
      </div>
      <div
        style={{
          backgroundColor: colors.blue300,
          width: "100%",
        }}
      >
        <hr />
        <ListDetails />
      </div>
    </div>
  );
};
export { Todo };
