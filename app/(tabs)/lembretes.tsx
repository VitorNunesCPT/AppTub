import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import {
  Bell,
  Plus,
  Clock,
  Pill,
  Activity,
  Settings,
  MoreVertical,
  CheckCircle,
  AlertCircle,
} from 'lucide-react-native';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { theme } from '@/styles/theme';

// Mock data
const mockReminders = [
  {
    id: '1',
    title: 'Medicação Rifampicina',
    description: '150mg - Tomar em jejum',
    time: '08:00',
    frequency: 'Diário',
    isActive: true,
    nextAlarm: '2024-01-16T08:00:00',
    type: 'medication',
  },
  {
    id: '2',
    title: 'Medicação Isoniazida',
    description: '100mg - Tomar em jejum',
    time: '08:00',
    frequency: 'Diário',
    isActive: true,
    nextAlarm: '2024-01-16T08:00:00',
    type: 'medication',
  },
  {
    id: '3',
    title: 'Registro de Sintomas',
    description: 'Anotar como está se sentindo',
    time: '20:00',
    frequency: 'Diário',
    isActive: false,
    nextAlarm: '2024-01-16T20:00:00',
    type: 'tracking',
  },
  {
    id: '4',
    title: 'Consulta Médica',
    description: 'Retorno com pneumologista',
    time: '14:30',
    frequency: 'Semanal',
    isActive: true,
    nextAlarm: '2024-01-18T14:30:00',
    type: 'appointment',
  },
];

const mockStats = {
  totalReminders: 4,
  activeReminders: 3,
  adherenceRate: 87,
  streak: 12,
};

export default function LembretesScreen() {
  const [reminders, setReminders] = useState(mockReminders);

  const toggleReminder = (id: string) => {
    setReminders(prev =>
      prev.map(reminder =>
        reminder.id === id
          ? { ...reminder, isActive: !reminder.isActive }
          : reminder
      )
    );
  };

  const getReminderIcon = (type: string) => {
    switch (type) {
      case 'medication':
        return Pill;
      case 'tracking':
        return Activity;
      case 'appointment':
        return Clock;
      default:
        return Bell;
    }
  };

  const getReminderColor = (type: string) => {
    switch (type) {
      case 'medication':
        return theme.colors.success;
      case 'tracking':
        return theme.colors.info;
      case 'appointment':
        return theme.colors.primary;
      default:
        return theme.colors.muted;
    }
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        {/* Estatísticas */}
        <Card style={styles.statsCard}>
          <CardHeader>
            <View style={styles.statsHeader}>
              <CardTitle style={styles.statsTitle}>Estatísticas</CardTitle>
              <TouchableOpacity style={styles.settingsButton}>
                <Settings color={theme.colors.muted.foreground} size={20} />
              </TouchableOpacity>
            </View>
          </CardHeader>
          <CardContent>
            <View style={styles.statsGrid}>
              <View style={styles.statItem}>
                <View style={[styles.statIcon, { backgroundColor: theme.colors.success[100] }]}>
                  <CheckCircle color={theme.colors.success[600]} size={20} />
                </View>
                <Text style={styles.statValue}>{mockStats.adherenceRate}%</Text>
                <Text style={styles.statLabel}>Adesão</Text>
              </View>
              <View style={styles.statItem}>
                <View style={[styles.statIcon, { backgroundColor: theme.colors.primary[100] }]}>
                  <Bell color={theme.colors.primary[600]} size={20} />
                </View>
                <Text style={styles.statValue}>{mockStats.activeReminders}</Text>
                <Text style={styles.statLabel}>Ativos</Text>
              </View>
              <View style={styles.statItem}>
                <View style={[styles.statIcon, { backgroundColor: theme.colors.warning[100] }]}>
                  <AlertCircle color={theme.colors.warning[600]} size={20} />
                </View>
                <Text style={styles.statValue}>{mockStats.streak}</Text>
                <Text style={styles.statLabel}>Sequência</Text>
              </View>
            </View>
          </CardContent>
        </Card>

        {/* Lista de lembretes */}
        <Card style={styles.remindersCard}>
          <CardHeader>
            <View style={styles.remindersHeader}>
              <CardTitle style={styles.remindersTitle}>Meus Lembretes</CardTitle>
              <TouchableOpacity style={styles.addButton}>
                <Plus color={theme.colors.primary[600]} size={20} />
              </TouchableOpacity>
            </View>
          </CardHeader>
          <CardContent>
            <View style={styles.remindersList}>
              {reminders.map((reminder) => {
                const IconComponent = getReminderIcon(reminder.type);
                const colorScheme = getReminderColor(reminder.type);
                
                return (
                  <View key={reminder.id} style={styles.reminderItem}>
                    <View style={styles.reminderContent}>
                      <View style={[styles.reminderIcon, { backgroundColor: colorScheme[100] }]}>
                        <IconComponent color={colorScheme[600]} size={20} />
                      </View>
                      
                      <View style={styles.reminderInfo}>
                        <Text style={styles.reminderTitle}>{reminder.title}</Text>
                        <Text style={styles.reminderDescription}>{reminder.description}</Text>
                        
                        <View style={styles.reminderMeta}>
                          <View style={styles.reminderTime}>
                            <Clock color={theme.colors.muted.foreground} size={14} />
                            <Text style={styles.reminderTimeText}>{reminder.time}</Text>
                          </View>
                          <Badge variant="outline" style={styles.frequencyBadge}>
                            <Text style={styles.frequencyText}>{reminder.frequency}</Text>
                          </Badge>
                        </View>
                      </View>
                    </View>
                    
                    <View style={styles.reminderControls}>
                      <Switch
                        value={reminder.isActive}
                        onValueChange={() => toggleReminder(reminder.id)}
                        trackColor={{
                          false: theme.colors.muted.DEFAULT,
                          true: theme.colors.primary[200],
                        }}
                        thumbColor={reminder.isActive ? theme.colors.primary.DEFAULT : '#f4f3f4'}
                      />
                      <TouchableOpacity style={styles.moreButton}>
                        <MoreVertical color={theme.colors.muted.foreground} size={16} />
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              })}
            </View>
          </CardContent>
        </Card>

        {/* Próximos lembretes */}
        <Card style={styles.upcomingCard}>
          <CardHeader>
            <CardTitle style={styles.upcomingTitle}>Próximos Lembretes</CardTitle>
          </CardHeader>
          <CardContent>
            <View style={styles.upcomingList}>
              {reminders
                .filter(r => r.isActive)
                .slice(0, 3)
                .map((reminder) => {
                  const IconComponent = getReminderIcon(reminder.type);
                  const colorScheme = getReminderColor(reminder.type);
                  
                  return (
                    <View key={reminder.id} style={styles.upcomingItem}>
                      <View style={[styles.upcomingIcon, { backgroundColor: colorScheme[100] }]}>
                        <IconComponent color={colorScheme[600]} size={16} />
                      </View>
                      <View style={styles.upcomingInfo}>
                        <Text style={styles.upcomingTitle}>{reminder.title}</Text>
                        <Text style={styles.upcomingTime}>
                          Hoje às {reminder.time}
                        </Text>
                      </View>
                      <Badge variant="outline" style={styles.upcomingBadge}>
                        <Text style={styles.upcomingBadgeText}>Hoje</Text>
                      </Badge>
                    </View>
                  );
                })}
            </View>
          </CardContent>
        </Card>

        {/* Botões de ação */}
        <View style={styles.actionButtons}>
          <Button 
            style={[styles.actionButton, { backgroundColor: theme.colors.primary.DEFAULT }]}
            onPress={() => console.log('Add reminder')}
          >
            <Plus size={16} />
            <Text style={styles.actionButtonText}>Novo Lembrete</Text>
          </Button>
          <Button 
            variant="outline"
            style={styles.actionButton}
            onPress={() => console.log('View history')}
          >
            <Clock size={16} />
            <Text style={styles.outlineButtonText}>Histórico</Text>
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    padding: theme.spacing.md,
  },
  statsCard: {
    marginBottom: theme.spacing.lg,
    backgroundColor: theme.colors.primary[50],
  },
  statsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statsTitle: {
    fontSize: theme.fontSize.lg,
    color: theme.colors.primary[700],
  },
  settingsButton: {
    padding: theme.spacing.sm,
    backgroundColor: theme.colors.primary[100],
    borderRadius: theme.borderRadius.lg,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statIcon: {
    padding: theme.spacing.sm,
    borderRadius: theme.borderRadius.lg,
    marginBottom: theme.spacing.sm,
  },
  statValue: {
    fontSize: theme.fontSize['2xl'],
    fontWeight: 'bold',
    color: theme.colors.foreground,
    marginBottom: theme.spacing.xs,
  },
  statLabel: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.muted.foreground,
  },
  remindersCard: {
    marginBottom: theme.spacing.lg,
  },
  remindersHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  remindersTitle: {
    fontSize: theme.fontSize.lg,
    color: theme.colors.foreground,
  },
  addButton: {
    padding: theme.spacing.sm,
    backgroundColor: theme.colors.primary[50],
    borderRadius: theme.borderRadius.lg,
  },
  remindersList: {
    gap: theme.spacing.md,
  },
  reminderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: theme.spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  reminderContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  reminderIcon: {
    padding: theme.spacing.sm,
    borderRadius: theme.borderRadius.lg,
    marginRight: theme.spacing.md,
  },
  reminderInfo: {
    flex: 1,
  },
  reminderTitle: {
    fontSize: theme.fontSize.md,
    fontWeight: '500',
    color: theme.colors.foreground,
    marginBottom: 2,
  },
  reminderDescription: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.muted.foreground,
    marginBottom: theme.spacing.sm,
  },
  reminderMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
  },
  reminderTime: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  reminderTimeText: {
    fontSize: theme.fontSize.xs,
    color: theme.colors.muted.foreground,
  },
  frequencyBadge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  frequencyText: {
    fontSize: 10,
    color: theme.colors.muted.foreground,
  },
  reminderControls: {
    alignItems: 'center',
    gap: theme.spacing.sm,
  },
  moreButton: {
    padding: theme.spacing.xs,
  },
  upcomingCard: {
    marginBottom: theme.spacing.lg,
    backgroundColor: theme.colors.info[50],
  },
  upcomingTitle: {
    fontSize: theme.fontSize.lg,
    color: theme.colors.info[700],
  },
  upcomingList: {
    gap: theme.spacing.md,
  },
  upcomingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.md,
  },
  upcomingIcon: {
    padding: theme.spacing.sm,
    borderRadius: theme.borderRadius.lg,
  },
  upcomingInfo: {
    flex: 1,
  },
  upcomingItemTitle: {
    fontSize: theme.fontSize.sm,
    fontWeight: '500',
    color: theme.colors.foreground,
    marginBottom: 2,
  },
  upcomingTime: {
    fontSize: theme.fontSize.xs,
    color: theme.colors.muted.foreground,
  },
  upcomingBadge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  upcomingBadgeText: {
    fontSize: 10,
    color: theme.colors.info[600],
  },
  actionButtons: {
    flexDirection: 'row',
    gap: theme.spacing.md,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing.sm,
    paddingVertical: theme.spacing.md,
    borderRadius: theme.borderRadius.lg,
  },
  actionButtonText: {
    color: '#ffffff',
    fontSize: theme.fontSize.md,
    fontWeight: '500',
  },
  outlineButtonText: {
    color: theme.colors.foreground,
    fontSize: theme.fontSize.md,
    fontWeight: '500',
  },
});