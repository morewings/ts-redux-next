import React from "react";
import { TextInput } from "@olxui/core/dist/core/TextInput";
import { NumberInput } from "@olxui/core/dist/core/NumberInput";
import { MultiSelect, MultiSelectProps } from "@olxui/core/dist/core/MultiSelect";
import { FormControl } from "@olxui/core/dist/core/FormControl";

const MultiSelectOptions = [
    { name: "foo", value: true, label: "Foo", type: "selectable" },
    { name: "bar", value: false, label: "Bar", type: "selectable" },
    { name: "fiz", type: "divider", label: "Baz" },
    {
        name: "baz",
        value: true,
        label: "Baz",
        type: "selectable",
        children: [
            { name: "baz-1", value: true, label: "Baz 1", type: "selectable" },
            { name: "baz-2", type: "divider", label: "Baz 2" },
            { name: "baz-3", value: true, label: "Baz 3", type: "selectable" },
        ],
    },
];

export const InputsDemo = () => {
    return (
        <div>
            <FormControl inputComponent={NumberInput} inputProps={{ value: 3 }} />
            <FormControl
                label="Yo"
                inputComponent={MultiSelect}
                inputProps={{
                    value: MultiSelectOptions as MultiSelectProps["value"],
                }}
            />
        </div>
    );
};
