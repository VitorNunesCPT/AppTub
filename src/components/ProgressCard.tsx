import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/Card';
import { theme } from '@/styles/theme';

interface ProgressCardProps {
  title: string;
  description: string;
  progress: number;
  status: 'success' | 'warning' | 'danger' | 'info';
  icon?: React.ReactNode;
}

export const ProgressCard: React.FC<ProgressCardProps> = ({
  title,
  description,
  progress,
  status,
  icon,
}) => {
  const statusColors = {
    success: theme.colors.success,
    warning: theme.colors.warning,
    danger: theme.colors.danger,
    info: theme.colors.info,
  };

  const colorScheme = statusColors[status];

  return (
    <Card style={styles.card}>
      <CardHeader style={styles.header}>
        <View style={styles.titleContainer}>
          {icon && (
            <View style={[styles.iconContainer, { backgroundColor: colorScheme[100] }]}>
              {icon}
            </View>
          )}
          <View style={styles.titleContent}>
            <CardTitle style={styles.title}>{title}</CardTitle>
            <Text style={styles.description}>{description}</Text>
          </View>
        </View>
      </CardHeader>
      
      <CardContent>
        <View style={styles.progressContainer}>
          <View style={[styles.progressBar, { backgroundColor: colorScheme[100] }]}>
            <View 
              style={[
                styles.progressFill, 
                { 
                  backgroundColor: colorScheme.DEFAULT,
                  width: `${progress}%`
                }
              ]} 
            />
          </View>
          <Text style={[styles.progressText, { color: colorScheme[700] }]}>
            {progress}%
          </Text>
        </View>
      </CardContent>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    marginHorizontal: 4,
  },
  header: {
    marginBottom: theme.spacing.sm,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    padding: 8,
    borderRadius: theme.borderRadius.md,
    marginRight: theme.spacing.sm,
  },
  titleContent: {
    flex: 1,
  },
  title: {
    fontSize: theme.fontSize.md,
    fontWeight: '600',
    marginBottom: 2,
  },
  description: {
    fontSize: theme.fontSize.xs,
    color: theme.colors.muted.foreground,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
  },
  progressBar: {
    flex: 1,
    height: 6,
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 3,
  },
  progressText: {
    fontSize: theme.fontSize.sm,
    fontWeight: '600',
    minWidth: 35,
    textAlign: 'right',
  },
});