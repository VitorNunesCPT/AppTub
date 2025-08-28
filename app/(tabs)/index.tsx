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
  Heart,
  Shield,
  Stethoscope,
  TrendingUp,
  Info,
  Calendar,
  Bell,
  Calculator,
  ArrowRight,
} from "lucide-react-native";

import { Button } from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { StatusIndicator } from "@/components/StatusIndicator";
import { ProgressCard } from "@/components/ProgressCard";
import { theme } from "@/styles/theme";

export default function Home() {
  const router = useRouter();

  const navigateTo = (route: string) => {
    router.push(route as any);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header com gradiente */}
      <View style={styles.headerGradient}>
        <View style={styles.headerIcon}>
          <Heart color="#ffffff" size={48} />
        </View>
        <Text style={styles.headerTitle}>TBInfo</Text>
        <Text style={styles.headerSubtitle}>
          Seu guia completo sobre tuberculose
        </Text>
        <StatusIndicator
          status="info"
          label="Informações atualizadas"
          style={styles.headerStatus}
          textStyle={{ color: "#ffffff" }}
        />
      </View>

      <View style={styles.content}>
        {/* Card de boas-vindas */}
        <Card style={styles.welcomeCard}>
          <CardHeader>
            <View style={styles.welcomeHeader}>
              <View>
                <CardTitle style={styles.welcomeTitle}>
                  Bem-vindo ao TBInfo
                </CardTitle>
                <CardDescription style={styles.welcomeDescription}>
                  Informações e acompanhamento para pacientes com tuberculose
                </CardDescription>
              </View>
            </View>
          </CardHeader>
          <CardContent>
            <Text style={styles.welcomeText}>
              Este aplicativo foi desenvolvido para ajudar pacientes com
              tuberculose a entender melhor a doença, seus sintomas, tratamento
              e acompanhar sua jornada de recuperação com informações baseadas
              em evidências científicas.
            </Text>
          </CardContent>
        </Card>

        {/* Seção de funcionalidades */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <TrendingUp color={theme.colors.primary[600]} size={20} />
            <Text style={styles.sectionTitle}>Funcionalidades</Text>
          </View>

          <View style={styles.featuresGrid}>
            {/* Card Informações */}
            <Card style={styles.featureCard}>
              <CardHeader style={styles.featureHeader}>
                <View style={styles.featureIconContainer}>
                  <View
                    style={[
                      styles.featureIcon,
                      { backgroundColor: theme.colors.info[100] },
                    ]}
                  >
                    <Info color={theme.colors.info[600]} size={24} />
                  </View>
                  <View style={styles.featureTitleContainer}>
                    <CardTitle style={styles.featureTitle}>
                      Informações Completas
                    </CardTitle>
                    <Badge variant="outline" style={styles.featureBadge}>
                      <Text
                        style={[
                          styles.featureBadgeText,
                          { color: theme.colors.info[700] },
                        ]}
                      >
                        8 seções
                      </Text>
                    </Badge>
                  </View>
                </View>
              </CardHeader>
              <CardContent>
                <Text style={styles.featureDescription}>
                  Acesse informações detalhadas sobre sintomas, transmissão,
                  tratamento, prevenção e dicas de autocuidado baseadas nas
                  diretrizes mais atuais.
                </Text>
                <View style={styles.tagsContainer}>
                  <Badge variant="secondary" style={styles.tag}>
                    <Text style={styles.tagText}>Sintomas</Text>
                  </Badge>
                  <Badge variant="secondary" style={styles.tag}>
                    <Text style={styles.tagText}>Tratamento</Text>
                  </Badge>
                  <Badge variant="secondary" style={styles.tag}>
                    <Text style={styles.tagText}>Prevenção</Text>
                  </Badge>
                </View>
              </CardContent>
              <CardFooter>
                <TouchableOpacity
                  style={[
                    styles.featureButton,
                    { backgroundColor: theme.colors.info[500] },
                  ]}
                  onPress={() => navigateTo("/info")}
                >
                  <Info color="#ffffff" size={16} />
                  <Text style={styles.featureButtonText}>
                    Explorar Informações
                  </Text>
                </TouchableOpacity>
              </CardFooter>
            </Card>

            {/* Card Calendário */}
            <Card style={styles.featureCard}>
              <CardHeader style={styles.featureHeader}>
                <View style={styles.featureIconContainer}>
                  <View
                    style={[
                      styles.featureIcon,
                      { backgroundColor: theme.colors.success[100] },
                    ]}
                  >
                    <Calendar color={theme.colors.success[600]} size={24} />
                  </View>
                  <View style={styles.featureTitleContainer}>
                    <CardTitle style={styles.featureTitle}>
                      Calendário de Acompanhamento
                    </CardTitle>
                    <Badge variant="outline" style={styles.featureBadge}>
                      <Text
                        style={[
                          styles.featureBadgeText,
                          { color: theme.colors.success[700] },
                        ]}
                      >
                        Interativo
                      </Text>
                    </Badge>
                  </View>
                </View>
              </CardHeader>
              <CardContent>
                <Text style={styles.featureDescription}>
                  Registre seus sintomas e medicações, configure lembretes e
                  acompanhe seu progresso durante o tratamento de forma
                  organizada.
                </Text>
                <View style={styles.tagsContainer}>
                  <Badge variant="secondary" style={styles.tag}>
                    <Text style={styles.tagText}>Medicamentos</Text>
                  </Badge>
                  <Badge variant="secondary" style={styles.tag}>
                    <Text style={styles.tagText}>Sintomas</Text>
                  </Badge>
                  <Badge variant="secondary" style={styles.tag}>
                    <Text style={styles.tagText}>Lembretes</Text>
                  </Badge>
                </View>
              </CardContent>
              <CardFooter>
                <TouchableOpacity
                  style={[
                    styles.featureButton,
                    { backgroundColor: theme.colors.success[500] },
                  ]}
                  onPress={() => navigateTo("/calendario")}
                >
                  <Calendar color="#ffffff" size={16} />
                  <Text style={styles.featureButtonText}>
                    Acessar Calendário
                  </Text>
                </TouchableOpacity>
              </CardFooter>
            </Card>

            {/* Card Lembretes */}
            <Card style={[styles.featureCard, styles.warningCard]}>
              <CardHeader style={styles.featureHeader}>
                <View style={styles.featureIconContainer}>
                  <View
                    style={[
                      styles.featureIcon,
                      { backgroundColor: theme.colors.warning[100] },
                    ]}
                  >
                    <Bell color={theme.colors.warning[600]} size={24} />
                  </View>
                  <View style={styles.featureTitleContainer}>
                    <CardTitle style={styles.featureTitle}>
                      Sistema de Lembretes
                    </CardTitle>
                    <Badge
                      variant="outline"
                      style={[
                        styles.featureBadge,
                        { backgroundColor: theme.colors.warning[50] },
                      ]}
                    >
                      <Text
                        style={[
                          styles.featureBadgeText,
                          { color: theme.colors.warning[700] },
                        ]}
                      >
                        Controle de Adesão
                      </Text>
                    </Badge>
                  </View>
                </View>
              </CardHeader>
              <CardContent>
                <Text style={styles.featureDescription}>
                  Configure lembretes personalizados para suas medicações,
                  acompanhe sua adesão ao tratamento e visualize estatísticas
                  detalhadas do seu progresso.
                </Text>
                <View style={styles.tagsContainer}>
                  <Badge variant="secondary" style={styles.tag}>
                    <Text style={styles.tagText}>Lembretes personalizados</Text>
                  </Badge>
                  <Badge variant="secondary" style={styles.tag}>
                    <Text style={styles.tagText}>Estatísticas</Text>
                  </Badge>
                </View>
              </CardContent>
              <CardFooter>
                <TouchableOpacity
                  style={[
                    styles.featureButton,
                    { backgroundColor: theme.colors.warning[500] },
                  ]}
                  onPress={() => navigateTo("/lembretes")}
                >
                  <Bell color="#ffffff" size={16} />
                  <Text style={styles.featureButtonText}>
                    Configurar Lembretes
                  </Text>
                </TouchableOpacity>
              </CardFooter>
            </Card>

            {/* Card Calculadora */}
            <Card style={[styles.featureCard, styles.purpleCard]}>
              <CardHeader style={styles.featureHeader}>
                <View style={styles.featureIconContainer}>
                  <View
                    style={[styles.featureIcon, { backgroundColor: "#f3e8ff" }]}
                  >
                    <Calculator color="#9333ea" size={24} />
                  </View>
                  <View style={styles.featureTitleContainer}>
                    <CardTitle style={styles.featureTitle}>
                      Calculadora de Medicação
                    </CardTitle>
                    <Badge
                      variant="outline"
                      style={[
                        styles.featureBadge,
                        { backgroundColor: "#f3e8ff" },
                      ]}
                    >
                      <Text
                        style={[styles.featureBadgeText, { color: "#7c3aed" }]}
                      >
                        Novo!
                      </Text>
                    </Badge>
                  </View>
                </View>
              </CardHeader>
              <CardContent>
                <Text style={styles.featureDescription}>
                  Calcule doses precisas por peso e idade, com esquemas
                  padronizados e ajustes para populações especiais. Validação
                  automática de doses máximas e mínimas.
                </Text>
                <View style={styles.tagsContainer}>
                  <Badge variant="secondary" style={styles.tag}>
                    <Text style={styles.tagText}>Cálculo por peso</Text>
                  </Badge>
                  <Badge variant="secondary" style={styles.tag}>
                    <Text style={styles.tagText}>Esquemas RHZE</Text>
                  </Badge>
                  <Badge variant="secondary" style={styles.tag}>
                    <Text style={styles.tagText}>Validações</Text>
                  </Badge>
                </View>
              </CardContent>
              <CardFooter>
                <TouchableOpacity
                  style={[styles.featureButton, { backgroundColor: "#9333ea" }]}
                  onPress={() => navigateTo("/calculadora")}
                >
                  <Calculator color="#ffffff" size={16} />
                  <Text style={styles.featureButtonText}>Calcular Doses</Text>
                </TouchableOpacity>
              </CardFooter>
            </Card>
          </View>
        </View>

        {/* Seção sobre a tuberculose */}
        {/* <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Heart color={theme.colors.danger[600]} size={20} />
            <Text style={styles.sectionTitle}>Sobre a Tuberculose</Text>
          </View>

          <View style={styles.progressGrid}>
            <ProgressCard
              title="Taxa de Cura"
              description="Com tratamento adequado"
              progress={95}
              status="success"
              icon={<Shield color={theme.colors.success[600]} size={16} />}
            />
            <ProgressCard
              title="Redução da Transmissão"
              description="Após 2-3 semanas de tratamento"
              progress={85}
              status="info"
              icon={<Stethoscope color={theme.colors.info[600]} size={16} />}
            />
            <ProgressCard
              title="Prevenção com BCG"
              description="Eficácia em formas graves"
              progress={80}
              status="warning"
              icon={<Heart color={theme.colors.warning[600]} size={16} />}
            />
          </View>
        </View> */}

        {/* Call to action */}
        <View style={styles.ctaCard}>
          <Text style={styles.ctaTitle}>A tuberculose tem cura!</Text>
          <Text style={styles.ctaDescription}>
            Com o tratamento correto e acompanhamento adequado, a tuberculose é
            completamente curável. Use este app para se manter informado e
            organizado durante sua jornada de recuperação.
          </Text>
          <View style={styles.ctaIndicators}>
            <StatusIndicator
              status="success"
              label="Tratamento eficaz"
              style={styles.ctaIndicator}
              textStyle={{ color: "#ffffff" }}
            />
            <StatusIndicator
              status="info"
              label="Informações confiáveis"
              style={styles.ctaIndicator}
              textStyle={{ color: "#ffffff" }}
            />
          </View>
        </View>

        {/* Card informativo BCG */}
        <Card style={styles.bcgCard}>
          <CardContent style={styles.bcgContent}>
            <View style={styles.bcgHeader}>
              <View style={styles.bcgIcon}>
                <Shield color={theme.colors.info[600]} size={20} />
              </View>
              <View style={styles.bcgTextContent}>
                <Text style={styles.bcgTitle}>Sobre a Vacina BCG</Text>
                <Text style={styles.bcgDescription}>
                  A vacina BCG contra tuberculose é administrada{" "}
                  <Text style={styles.bcgBold}>
                    exclusivamente para crianças
                  </Text>{" "}
                  de 0 a 4 anos, 11 meses e 29 dias, preferencialmente logo após
                  o nascimento. É aplicada em{" "}
                  <Text style={styles.bcgBold}>dose única</Text> e protege
                  contra as formas graves da doença.
                </Text>
                <TouchableOpacity
                  style={styles.bcgLink}
                  onPress={() => navigateTo("/info")}
                >
                  <Text style={styles.bcgLinkText}>
                    Saiba mais sobre prevenção
                  </Text>
                  <ArrowRight color={theme.colors.info[700]} size={12} />
                </TouchableOpacity>
              </View>
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
    backgroundColor: "#ffffff",
  },
  headerGradient: {
    padding: theme.spacing.lg,
    alignItems: "center",
    borderBottomLeftRadius: theme.borderRadius.xl,
    borderBottomRightRadius: theme.borderRadius.xl,
    backgroundColor: theme.colors.primary.DEFAULT,
  },
  headerIcon: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.xl,
    marginBottom: theme.spacing.md,
  },
  headerTitle: {
    fontSize: theme.fontSize["4xl"],
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: theme.spacing.xs,
  },
  headerSubtitle: {
    fontSize: theme.fontSize.lg,
    color: "rgba(255, 255, 255, 0.9)",
    marginBottom: theme.spacing.md,
    textAlign: "center",
  },
  headerStatus: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderColor: "rgba(255, 255, 255, 0.3)",
  },
  content: {
    padding: theme.spacing.md,
  },
  welcomeCard: {
    backgroundColor: theme.colors.primary[50],
    marginBottom: theme.spacing.lg,
  },
  welcomeHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  welcomeTitle: {
    color: theme.colors.primary[700],
    fontSize: theme.fontSize.xl,
  },
  welcomeDescription: {
    fontSize: theme.fontSize.md,
    marginTop: theme.spacing.xs,
  },
  updatedBadge: {
    backgroundColor: theme.colors.success[100],
    borderColor: theme.colors.success[200],
  },
  updatedBadgeText: {
    color: theme.colors.success[700],
  },
  welcomeText: {
    color: theme.colors.muted.foreground,
    lineHeight: 24,
    fontSize: theme.fontSize.sm,
  },
  section: {
    marginBottom: theme.spacing.lg,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: theme.spacing.md,
  },
  sectionTitle: {
    fontSize: theme.fontSize["2xl"],
    fontWeight: "600",
    color: theme.colors.primary[700],
    marginLeft: theme.spacing.sm,
  },
  featuresGrid: {
    gap: theme.spacing.md,
  },
  featureCard: {
    marginBottom: theme.spacing.md,
  },
  warningCard: {
    backgroundColor: theme.colors.warning[50],
  },
  purpleCard: {
    backgroundColor: "#faf5ff",
  },
  featureHeader: {
    paddingBottom: theme.spacing.sm,
  },
  featureIconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  featureIcon: {
    padding: theme.spacing.sm,
    borderRadius: theme.borderRadius.lg,
    marginRight: theme.spacing.md,
  },
  featureTitleContainer: {
    flex: 1,
  },
  featureTitle: {
    fontSize: theme.fontSize.lg,
    color: theme.colors.primary[700],
  },
  featureBadge: {
    marginTop: theme.spacing.xs,
    alignSelf: "flex-start",
  },
  featureBadgeText: {
    fontSize: 10,
  },
  featureDescription: {
    color: theme.colors.muted.foreground,
    lineHeight: 20,
    marginBottom: theme.spacing.md,
    fontSize: theme.fontSize.sm,
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: theme.spacing.xs,
  },
  tag: {
    backgroundColor: theme.colors.primary[50],
  },
  tagText: {
    color: theme.colors.primary[700],
    fontSize: 10,
  },
  featureButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
    gap: theme.spacing.sm,
  },
  featureButtonText: {
    color: "#ffffff",
    fontSize: theme.fontSize.sm,
    fontWeight: "500",
  },
  progressGrid: {
    flexDirection: "row",
    gap: theme.spacing.xs,
  },
  ctaCard: {
    padding: theme.spacing.lg,
    borderRadius: theme.borderRadius.xl,
    marginBottom: theme.spacing.lg,
    alignItems: "center",
    backgroundColor: theme.colors.primary.DEFAULT,
  },
  ctaTitle: {
    fontSize: theme.fontSize.xl,
    fontWeight: "600",
    color: "#ffffff",
    marginBottom: theme.spacing.sm,
    textAlign: "center",
  },
  ctaDescription: {
    color: "rgba(255, 255, 255, 0.9)",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: theme.spacing.md,
    fontSize: theme.fontSize.sm,
  },
  ctaIndicators: {
    flexDirection: "row",
    gap: theme.spacing.md,
    flexWrap: "wrap",
    justifyContent: "center",
  },
  ctaIndicator: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderColor: "rgba(255, 255, 255, 0.3)",
  },
  bcgCard: {
    backgroundColor: theme.colors.info[50],
    borderColor: theme.colors.info[200],
    borderWidth: 1,
  },
  bcgContent: {
    padding: theme.spacing.md,
  },
  bcgHeader: {
    flexDirection: "row",
  },
  bcgIcon: {
    backgroundColor: theme.colors.info[100],
    padding: theme.spacing.sm,
    borderRadius: theme.borderRadius.lg,
    marginRight: theme.spacing.md,
    alignSelf: "flex-start",
  },
  bcgTextContent: {
    flex: 1,
  },
  bcgTitle: {
    fontSize: theme.fontSize.lg,
    fontWeight: "600",
    color: theme.colors.info[700],
    marginBottom: theme.spacing.xs,
  },
  bcgDescription: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.info[600],
    lineHeight: 20,
  },
  bcgBold: {
    fontWeight: "bold",
  },
  bcgLink: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: theme.spacing.sm,
  },
  bcgLinkText: {
    color: theme.colors.info[700],
    fontSize: theme.fontSize.sm,
    marginRight: theme.spacing.xs,
  },
});
