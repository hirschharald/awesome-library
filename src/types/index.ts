import type { ReactNode } from 'react';
import type { StyleProp, TextStyle } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'; // Replace with the correct type or remove if unused
// fot the theme switcher
export type themeType = 'dark' | 'light';

export interface TextProps {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
  theme?: themeType;
}
export type textInputType = {
  //   icon?: IconProps<string>
  iconName?: keyof typeof FontAwesome.glyphMap;
  label: string;
  isPassword?: boolean;
  isDecimal?: boolean;
  name: string;
  onValueChange: (name: string, value: string) => void;
  width?: number;
  style?: {};
  validation?: {
    type?: 'email' | 'numeric' | 'password' | 'url' | 'phone' | 'ipAdress'|'decimal';
    required?: true;
  };
  theme?: 'light' | 'dark';
  props?: {};
};
export interface inputSelectProps {
  items: SelectItem[];
  enabled?: boolean;
  iconName?: keyof typeof MaterialCommunityIcons.glyphMap;
  label: string;
  name: string;
  isDecimal?: boolean;
  accessibilityLabel?: string;
  onValueChange: (name: string, value: string) => void;
  width?: number;
  placeholder?: string;
  style?: {};
  validation?: {
    type?: 'email' | 'numeric' | 'password' | 'url' | 'phone' | 'ipAdress';
    required?: true;
  };
  theme?: 'light' | 'dark';
  props?: {};
}
export type SelectItem = {
  value: string | number;
};
