import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { theme } from '@/styles/theme';

interface ButtonProps {
  children: React.ReactNode;
  onPress?: () => void;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg';
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onPress,
  variant = 'default',
  size = 'default',
  disabled = false,
  style,
  textStyle,
}) => {
  const buttonStyles = [
    styles.base,
    styles[variant],
    styles[size],
    disabled && styles.disabled,
    style,
  ];

  const textStyles = [
    styles.textBase,
    styles[`text_${variant}`],
    styles[`text_${size}`],
    disabled && styles.textDisabled,
    textStyle,
  ];

  return (
    <TouchableOpacity
      style={buttonStyles}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
    >
      <Text style={textStyles}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.borderRadius.md,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
  },
  textBase: {
    fontSize: theme.fontSize.sm,
    fontWeight: '500',
    textAlign: 'center',
  },
  
  // Variants
  default: {
    backgroundColor: theme.colors.primary.DEFAULT,
  },
  destructive: {
    backgroundColor: theme.colors.danger.DEFAULT,
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  secondary: {
    backgroundColor: theme.colors.secondary.DEFAULT,
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  link: {
    backgroundColor: 'transparent',
  },
  
  // Text variants
  text_default: {
    color: '#ffffff',
  },
  text_destructive: {
    color: '#ffffff',
  },
  text_outline: {
    color: theme.colors.foreground,
  },
  text_secondary: {
    color: theme.colors.secondary.foreground,
  },
  text_ghost: {
    color: theme.colors.foreground,
  },
  text_link: {
    color: theme.colors.primary.DEFAULT,
    textDecorationLine: 'underline',
  },
  
  // Sizes
  default: {
    minHeight: 40,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
  },
  sm: {
    minHeight: 36,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  lg: {
    minHeight: 44,
    paddingHorizontal: theme.spacing.xl,
    paddingVertical: 12,
  },
  
  // Text sizes
  text_default: {
    fontSize: theme.fontSize.sm,
  },
  text_sm: {
    fontSize: 12,
  },
  text_lg: {
    fontSize: theme.fontSize.md,
  },
  
  // Disabled state
  disabled: {
    opacity: 0.5,
  },
  textDisabled: {
    opacity: 0.5,
  },
});