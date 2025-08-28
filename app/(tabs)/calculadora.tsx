import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import {
  Calculator,
  User,
  Weight,
  Calendar,
  AlertTriangle,
  CheckCircle,
  Info,
  Pill,
} from 'lucide-react-native';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { theme } from '@/styles/theme';

interface MedicationResult {
  name: string;
  dose: number;
  unit: string;
  tablets: number;
  frequency: string;
  warning?: string;
}

export default function CalculadoraScreen() {
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [isPregnant, setIsPregnant] = useState(false);
  const [results, setResults] = useState<MedicationResult[]>([]);
  const [showResults, setShowResults] = useState(false);

  const calculateDoses = () => {
    const weightNum = parseFloat(weight);
    const ageNum = parseInt(age);
    
    if (!weightNum || !ageNum || weightNum <= 0 || ageNum <= 0) {
      return;
    }

    // Doses baseadas no protocolo RHZE (valores simplificados para exemplo)
    const medications: MedicationResult[] = [
      {
        name: 'Rifampicina (R)',
        dose: Math.min(600, Math.max(300, weightNum * 10)), // 10mg/kg, max 600mg
        unit: 'mg',
        tablets: Math.ceil((Math.min(600, Math.max(300, weightNum * 10))) / 150), // comprimidos de 150mg
        frequency: '1x ao dia (jejum)',
      },
      {
        name: 'Isoniazida (H)',
        dose: Math.min(400, Math.max(200, weightNum * 5)), // 5mg/kg, max 400mg
        unit: 'mg',
        tablets: Math.ceil((Math.min(400, Math.max(200, weightNum * 5))) / 100), // comprimidos de 100mg
        frequency: '1x ao dia (jejum)',
      },
      {
        name: 'Pirazinamida (Z)',
        dose: Math.min(2000, Math.max(1000, weightNum * 25)), // 25mg/kg, max 2000mg
        unit: 'mg',
        tablets: Math.ceil((Math.min(2000, Math.max(1000, weightNum * 25))) / 500), // comprimidos de 500mg
        frequency: '1x ao dia',
      },
      {
        name: 'Etambutol (E)',
        dose: Math.min(1200, Math.max(600, weightNum * 15)), // 15mg/kg, max 1200mg
        unit: 'mg',
        tablets: Math.ceil((Math.min(1200, Math.max(600, weightNum * 15))) / 400), // comprimidos de 400mg
        frequency: '1x ao dia',
      },
    ];

    // Adicionar warnings para casos especiais
    if (weightNum < 35) {
      medications.forEach(med => {
        med.warning = 'Paciente com baixo peso - considere ajuste médico';
      });
    }

    if (ageNum > 60) {
      medications.forEach(med => {
        med.warning = 'Paciente idoso - monitorar função hepática e renal';
      });
    }

    if (isPregnant) {
      const pzaIndex = medications.findIndex(med => med.name.includes('Pirazinamida'));
      if (pzaIndex !== -1) {
        medications[pzaIndex].warning = 'ATENÇÃO: Pirazinamida pode ser contraindicada na gravidez';
      }
    }

    setResults(medications);
    setShowResults(true);
  };

  const resetCalculator = () => {
    setWeight('');
    setAge('');
    setIsPregnant(false);
    setResults([]);
    setShowResults(false);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerIcon}>
            <Calculator color={theme.colors.primary[600]} size={32} />
          </View>
          <Text style={styles.headerTitle}>Calculadora de Medicação</Text>
          <Text style={styles.headerDescription}>
            Calcule doses precisas dos medicamentos do esquema RHZE
          </Text>
        </View>

        {/* Formulário */}
        <Card style={styles.formCard}>
          <CardHeader>
            <CardTitle style={styles.formTitle}>Dados do Paciente</CardTitle>
          </CardHeader>
          <CardContent>
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>
                <Weight size={16} color={theme.colors.muted.foreground} />
                {' '}Peso (kg)
              </Text>
              <TextInput
                style={styles.textInput}
                value={weight}
                onChangeText={setWeight}
                placeholder="Ex: 70"
                keyboardType="numeric"
                placeholderTextColor={theme.colors.muted.foreground}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>
                <User size={16} color={theme.colors.muted.foreground} />
                {' '}Idade (anos)
              </Text>
              <TextInput
                style={styles.textInput}
                value={age}
                onChangeText={setAge}
                placeholder="Ex: 35"
                keyboardType="numeric"
                placeholderTextColor={theme.colors.muted.foreground}
              />
            </View>

            <View style={styles.checkboxGroup}>
              <TouchableOpacity 
                style={styles.checkbox}
                onPress={() => setIsPregnant(!isPregnant)}
              >
                <View style={[
                  styles.checkboxBox,
                  isPregnant && styles.checkboxBoxChecked
                ]}>
                  {isPregnant && <CheckCircle size={16} color="#ffffff" />}
                </View>
                <Text style={styles.checkboxLabel}>Paciente gestante</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonGroup}>
              <Button 
                style={styles.calculateButton}
                onPress={calculateDoses}
              >
                <Calculator size={16} />
                <Text style={styles.calculateButtonText}>Calcular Doses</Text>
              </Button>
              
              {showResults && (
                <Button 
                  variant="outline"
                  style={styles.resetButton}
                  onPress={resetCalculator}
                >
                  <Text style={styles.resetButtonText}>Limpar</Text>
                </Button>
              )}
            </View>
          </CardContent>
        </Card>

        {/* Resultados */}
        {showResults && (
          <Card style={styles.resultsCard}>
            <CardHeader>
              <View style={styles.resultsHeader}>
                <CardTitle style={styles.resultsTitle}>Resultados do Cálculo</CardTitle>
                <Badge variant="default" style={styles.resultsBadge}>
                  <Text style={styles.resultsBadgeText}>Esquema RHZE</Text>
                </Badge>
              </View>
            </CardHeader>
            <CardContent>
              <View style={styles.patientInfo}>
                <Text style={styles.patientInfoText}>
                  Paciente: {age} anos, {weight}kg
                  {isPregnant && ' (Gestante)'}
                </Text>
              </View>

              <View style={styles.medicationsList}>
                {results.map((medication, index) => (
                  <View key={index} style={styles.medicationItem}>
                    <View style={styles.medicationHeader}>
                      <View style={styles.medicationIcon}>
                        <Pill color={theme.colors.primary[600]} size={20} />
                      </View>
                      <View style={styles.medicationInfo}>
                        <Text style={styles.medicationName}>{medication.name}</Text>
                        <Text style={styles.medicationFrequency}>{medication.frequency}</Text>
                      </View>
                    </View>
                    
                    <View style={styles.medicationDose}>
                      <Text style={styles.doseValue}>
                        {medication.dose}{medication.unit}
                      </Text>
                      <Text style={styles.tabletsValue}>
                        {medication.tablets} comprimido{medication.tablets > 1 ? 's' : ''}
                      </Text>
                    </View>

                    {medication.warning && (
                      <View style={styles.warningContainer}>
                        <AlertTriangle size={14} color={theme.colors.warning[600]} />
                        <Text style={styles.warningText}>{medication.warning}</Text>
                      </View>
                    )}
                  </View>
                ))}
              </View>

              <View style={styles.disclaimer}>
                <View style={styles.disclaimerIcon}>
                  <Info size={16} color={theme.colors.info[600]} />
                </View>
                <Text style={styles.disclaimerText}>
                  Este cálculo é apenas uma referência. Sempre confirme as doses com um médico 
                  antes de iniciar ou alterar o tratamento.
                </Text>
              </View>
            </CardContent>
          </Card>
        )}

        {/* Informações adicionais */}
        <Card style={styles.infoCard}>
          <CardHeader>
            <CardTitle style={styles.infoTitle}>Sobre o Esquema RHZE</CardTitle>
          </CardHeader>
          <CardContent>
            <View style={styles.infoContent}>
              <Text style={styles.infoText}>
                O esquema RHZE é o tratamento padrão para tuberculose pulmonar:
              </Text>
              
              <View style={styles.infoList}>
                <Text style={styles.infoItem}>• R - Rifampicina</Text>
                <Text style={styles.infoItem}>• H - Isoniazida</Text>
                <Text style={styles.infoItem}>• Z - Pirazinamida (primeiros 2 meses)</Text>
                <Text style={styles.infoItem}>• E - Etambutol (primeiros 2 meses)</Text>
              </View>
              
              <Text style={styles.infoNote}>
                Duração: 6 meses (2 meses RHZE + 4 meses RH)
              </Text>
            </View>
          </CardContent>
        </Card>
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
  header: {
    alignItems: 'center',
    marginBottom: theme.spacing.lg,
  },
  headerIcon: {
    backgroundColor: theme.colors.primary[100],
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.xl,
    marginBottom: theme.spacing.md,
  },
  headerTitle: {
    fontSize: theme.fontSize['2xl'],
    fontWeight: 'bold',
    color: theme.colors.foreground,
    marginBottom: theme.spacing.sm,
  },
  headerDescription: {
    fontSize: theme.fontSize.md,
    color: theme.colors.muted.foreground,
    textAlign: 'center',
    lineHeight: 22,
  },
  formCard: {
    marginBottom: theme.spacing.lg,
  },
  formTitle: {
    fontSize: theme.fontSize.lg,
    color: theme.colors.foreground,
  },
  inputGroup: {
    marginBottom: theme.spacing.md,
  },
  inputLabel: {
    fontSize: theme.fontSize.sm,
    fontWeight: '500',
    color: theme.colors.foreground,
    marginBottom: theme.spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.md,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    fontSize: theme.fontSize.md,
    color: theme.colors.foreground,
    backgroundColor: '#ffffff',
  },
  checkboxGroup: {
    marginBottom: theme.spacing.lg,
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxBox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: theme.colors.border,
    borderRadius: 4,
    marginRight: theme.spacing.sm,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxBoxChecked: {
    backgroundColor: theme.colors.primary.DEFAULT,
    borderColor: theme.colors.primary.DEFAULT,
  },
  checkboxLabel: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.foreground,
  },
  buttonGroup: {
    flexDirection: 'row',
    gap: theme.spacing.md,
  },
  calculateButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing.sm,
    backgroundColor: theme.colors.primary.DEFAULT,
    paddingVertical: theme.spacing.md,
    borderRadius: theme.borderRadius.lg,
  },
  calculateButtonText: {
    color: '#ffffff',
    fontSize: theme.fontSize.md,
    fontWeight: '500',
  },
  resetButton: {
    paddingHorizontal: theme.spacing.lg,
  },
  resetButtonText: {
    color: theme.colors.foreground,
    fontSize: theme.fontSize.md,
  },
  resultsCard: {
    marginBottom: theme.spacing.lg,
    backgroundColor: theme.colors.success[50],
    borderColor: theme.colors.success[200],
    borderWidth: 1,
  },
  resultsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  resultsTitle: {
    fontSize: theme.fontSize.lg,
    color: theme.colors.success[700],
  },
  resultsBadge: {
    backgroundColor: theme.colors.success[100],
  },
  resultsBadgeText: {
    color: theme.colors.success[700],
    fontSize: 10,
  },
  patientInfo: {
    backgroundColor: theme.colors.success[100],
    padding: theme.spacing.sm,
    borderRadius: theme.borderRadius.md,
    marginBottom: theme.spacing.md,
  },
  patientInfoText: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.success[700],
    fontWeight: '500',
  },
  medicationsList: {
    gap: theme.spacing.md,
    marginBottom: theme.spacing.md,
  },
  medicationItem: {
    backgroundColor: '#ffffff',
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.lg,
    borderLeftWidth: 4,
    borderLeftColor: theme.colors.primary.DEFAULT,
  },
  medicationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
  },
  medicationIcon: {
    backgroundColor: theme.colors.primary[100],
    padding: theme.spacing.sm,
    borderRadius: theme.borderRadius.lg,
    marginRight: theme.spacing.md,
  },
  medicationInfo: {
    flex: 1,
  },
  medicationName: {
    fontSize: theme.fontSize.md,
    fontWeight: '600',
    color: theme.colors.foreground,
    marginBottom: 2,
  },
  medicationFrequency: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.muted.foreground,
  },
  medicationDose: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
  },
  doseValue: {
    fontSize: theme.fontSize.lg,
    fontWeight: 'bold',
    color: theme.colors.primary[600],
  },
  tabletsValue: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.muted.foreground,
    fontWeight: '500',
  },
  warningContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.warning[50],
    padding: theme.spacing.sm,
    borderRadius: theme.borderRadius.md,
    gap: theme.spacing.sm,
  },
  warningText: {
    flex: 1,
    fontSize: theme.fontSize.xs,
    color: theme.colors.warning[700],
  },
  disclaimer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: theme.colors.info[50],
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.lg,
    gap: theme.spacing.sm,
  },
  disclaimerIcon: {
    marginTop: 2,
  },
  disclaimerText: {
    flex: 1,
    fontSize: theme.fontSize.sm,
    color: theme.colors.info[700],
    lineHeight: 20,
  },
  infoCard: {
    backgroundColor: theme.colors.primary[50],
  },
  infoTitle: {
    fontSize: theme.fontSize.lg,
    color: theme.colors.primary[700],
  },
  infoContent: {},
  infoText: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.primary[600],
    marginBottom: theme.spacing.md,
    lineHeight: 20,
  },
  infoList: {
    marginBottom: theme.spacing.md,
    paddingLeft: theme.spacing.md,
  },
  infoItem: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.primary[600],
    marginBottom: theme.spacing.xs,
    lineHeight: 20,
  },
  infoNote: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.primary[700],
    fontWeight: '500',
    fontStyle: 'italic',
  },
});