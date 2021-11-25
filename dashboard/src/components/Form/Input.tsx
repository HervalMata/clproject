// @flow
import * as React from 'react';
import {FormControl, Input as ChakraInput, InputProps as ChakraInputProps} from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
    placeholder: string;
}

export function Input({name, label, placeholder, ...rest}: InputProps) {
    return (
        <FormControl>
            <ChakraInput
                name={name} id={name} placeholder={placeholder}
                focusBorderColor='blue.500' bgColor="gray.300"
                variant='filled' _hover={{bgColor: 'gray.300'}} size='lg'
            />
        </FormControl>
    );
};