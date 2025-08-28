import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { theme } from '@/styles/theme';

interface StatusIndicatorProps {
  status: 'success' | 'warning' | 'danger' | 'info';
  label: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const StatusIndicator: React.FC<StatusIndicatorProps> = ({
  status,
  label,
  style,
  textStyle,
}) => {
  const statusColors = {
    success: theme.colors.success,
    warning: theme.colors.warning,
    danger: theme.colors.danger,
    info: theme.colors.info,
  };

  const colorScheme = statusColors[status];

  return (
    <View style={[
      styles.container,
      { 
        backgroundColor: colorScheme[50],
        borderColor: colorScheme[200],
      },
      style
    ]}>
      <View style={[
        styles.indicator,
        { backgroundColor: colorScheme.DEFAULT }
      ]} />
      <Text style={[
        styles.label,
        { color: colorScheme[700] },
        textStyle
      ]}>
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: theme.borderRadius.md,
    borderWidth: 1,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  label: {
    fontSize: theme.fontSize.sm,
    fontWeight: '500',
  },
});