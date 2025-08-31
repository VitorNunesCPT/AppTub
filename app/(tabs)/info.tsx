import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import {
  Activity,
  Users,
  Pill,
  Shield,
  Heart,
  AlertTriangle,
  Zap,
  HelpCircle,
  ChevronRight,
} from "lucide-react-native";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { theme } from "@/styles/theme";

const infoSections = [
  {
    id: "sintomas",
    title: "Sintomas",
    description: "Principais sinais e sintomas da tuberculose",
    icon: Activity,
    color: theme.colors.danger,
  },
  {
    id: "transmissao",
    title: "Transmissão",
    description: "Como a tuberculose é transmitida",
    icon: Users,
    color: theme.colors.warning,
  },
  {
    id: "diagnostico",
    title: "Diagnóstico",
    description: "Como a tuberculose é diagnosticada",
    icon: Users,
    color: theme.colors.warning,
  },
  {
    id: "tratamento",
    title: "Tratamento",
    description: "Medicamentos e duração do tratamento",
    icon: Pill,
    color: theme.colors.success,
  },
  {
    id: "reacoes-adversas",
    title: "Reações Adversas",
    description: "Efeitos colaterais dos medicamentos",
    icon: AlertTriangle,
    color: theme.colors.danger,
  },
  {
    id: "interacoes",
    title: "Interações Medicamentosas",
    description:
      "Interações entre medicamentos antirretrovirais e tuberculostáticos",
    icon: AlertTriangle,
    color: theme.colors.danger,
  },
  {
    id: "reacoes-tuberculose",
    title: "Reações à Tuberculose",
    description: "Reações adversas específicas ao tratamento da tuberculose",
    icon: AlertTriangle,
    color: theme.colors.danger,
  },
  {
    id: "autocuidado",
    title: "Autocuidado",
    description: "Cuidados pessoais durante o tratamento",
    icon: Heart,
    color: theme.colors.info,
  },
  {
    id: "prevencao",
    title: "Prevenção",
    description: "Como prevenir a tuberculose",
    icon: Shield,
    color: theme.colors.primary,
  },

  {
    id: "tb-hiv",
    title: "TB-HIV",
    description: "Tuberculose em pessoas com HIV",
    icon: Zap,
    color: theme.colors.warning,
  },
  {
    id: "epidemiologia",
    title: "Epidemiologia",
    description: "Dados e estatísticas sobre tuberculose",
    icon: HelpCircle,
    color: theme.colors.primary,
  },
  {
    id: "manuais",
    title: "Manuais",
    description: "Manuais e guias sobre tuberculose",
    icon: HelpCircle,
    color: theme.colors.primary,
  },
  {
    id: "nutricao",
    title: "Nutrição",
    description: "Aspectos nutricionais relacionados à tuberculose",
    icon: HelpCircle,
    color: theme.colors.primary,
  },
];

export default function InfoScreen() {
  const router = useRouter();

  const handleSectionPress = (sectionId: string) => {
    router.push(`/info/${sectionId}` as any);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Informações sobre Tuberculose</Text>
          <Text style={styles.headerDescription}>
            Acesse informações detalhadas e atualizadas sobre todos os aspectos
            da tuberculose
          </Text>
        </View>

        <View style={styles.sectionsGrid}>
          {infoSections.map((section) => {
            const IconComponent = section.icon;
            return (
              <TouchableOpacity
                key={section.id}
                onPress={() => handleSectionPress(section.id)}
                activeOpacity={0.7}
              >
                <Card style={styles.sectionCard}>
                  <CardHeader style={styles.sectionHeader}>
                    <View style={styles.sectionIconContainer}>
                      <View
                        style={[
                          styles.sectionIcon,
                          { backgroundColor: section.color[100] },
                        ]}
                      >
                        <IconComponent color={section.color[600]} size={24} />
                      </View>
                      <ChevronRight
                        color={theme.colors.muted.foreground}
                        size={20}
                        style={styles.chevron}
                      />
                    </View>
                    <CardTitle style={styles.sectionTitle}>
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Text style={styles.sectionDescription}>
                      {section.description}
                    </Text>
                  </CardContent>
                </Card>
              </TouchableOpacity>
            );
          })}
        </View>

        <Card style={styles.warningCard}>
          <CardContent style={styles.warningContent}>
            <View style={styles.warningHeader}>
              <View style={styles.warningIcon}>
                <AlertTriangle color={theme.colors.warning[600]} size={20} />
              </View>
              <Text style={styles.warningTitle}>Importante</Text>
            </View>
            <Text style={styles.warningText}>
              As informações apresentadas neste aplicativo são baseadas em
              diretrizes oficiais e têm caráter educativo. Sempre consulte um
              profissional de saúde para orientações específicas sobre seu
              tratamento.
            </Text>
          </CardContent>
        </Card>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  content: {
    padding: theme.spacing.md,
  },
  header: {
    marginBottom: theme.spacing.xl,
  },
  headerTitle: {
    fontSize: theme.fontSize["2xl"],
    fontWeight: "bold",
    color: theme.colors.foreground,
    marginBottom: theme.spacing.sm,
  },
  headerDescription: {
    fontSize: theme.fontSize.md,
    color: theme.colors.muted.foreground,
    lineHeight: 22,
  },
  sectionsGrid: {
    gap: theme.spacing.md,
    marginBottom: theme.spacing.lg,
  },
  sectionCard: {
    borderLeftWidth: 4,
    borderLeftColor: theme.colors.primary.DEFAULT,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sectionIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  sectionIcon: {
    padding: theme.spacing.sm,
    borderRadius: theme.borderRadius.lg,
    marginRight: theme.spacing.md,
  },
  chevron: {
    marginLeft: "auto",
  },
  sectionTitle: {
    fontSize: theme.fontSize.lg,
    color: theme.colors.foreground,
    flex: 1,
  },
  sectionDescription: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.muted.foreground,
    lineHeight: 20,
  },
  warningCard: {
    backgroundColor: theme.colors.warning[50],
    borderColor: theme.colors.warning[200],
    borderWidth: 1,
  },
  warningContent: {
    padding: theme.spacing.md,
  },
  warningHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: theme.spacing.sm,
  },
  warningIcon: {
    backgroundColor: theme.colors.warning[100],
    padding: theme.spacing.sm,
    borderRadius: theme.borderRadius.lg,
    marginRight: theme.spacing.sm,
  },
  warningTitle: {
    fontSize: theme.fontSize.md,
    fontWeight: "600",
    color: theme.colors.warning[700],
  },
  warningText: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.warning[600],
    lineHeight: 20,
  },
});
