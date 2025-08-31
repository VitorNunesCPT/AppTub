import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { Badge } from "@/components/ui/Badge";
// import { Separator } from "@/components/ui/separator";
import {
  Bug,
  AlertTriangle,
  Shield,
  Clock,
  Users,
  Stethoscope,
  Activity,
} from "lucide-react-native";
import { Alert, AlertDescription } from "@/components/ui/Alert";

export default function ReacoesTuberculoseScreen() {
  const reacoesMedicamentos = {
    menores: [
      {
        reacao: "Náuseas leves",
        descricao: "Desconforto gástrico sem vômitos persistentes",
        manejo: "Tomar medicação com alimentos, não suspender tratamento",
      },
      {
        reacao: "Dor de cabeça",
        descricao: "Cefaleia leve a moderada",
        manejo: "Analgésicos simples, hidratação adequada",
      },
      {
        reacao: "Alterações digestivas leves",
        descricao: "Mudanças no apetite ou digestão",
        manejo: "Ajustes na dieta, acompanhamento clínico",
      },
    ],
    maiores: [
      {
        reacao: "Neuropatia periférica",
        descricao: "Formigamento, dormência nas mãos/pés (Isoniazida)",
        manejo:
          "Piridoxina (Vitamina B6), possível substituição do medicamento",
      },
      {
        reacao: "Hepatotoxicidade",
        descricao: "Alterações graves da função hepática",
        manejo: "Suspensão temporária, monitoramento laboratorial intensivo",
      },
      {
        reacao: "Acidose lática",
        descricao: "Complicação metabólica grave (Linezolida)",
        manejo: "Suspensão imediata, substituição por outro fármaco",
      },
      {
        reacao: "Alterações visuais",
        descricao: "Problemas na discriminação de cores (Etambutol)",
        manejo: "Avaliação oftalmológica, possível suspensão",
      },
    ],
  };

  const eventosVacina = [
    {
      evento: "Cicatriz queloide",
      descricao: "Cicatriz elevada e espessa no local da vacinação",
      gravidade: "Leve",
    },
    {
      evento: "Úlcera > 1cm",
      descricao: "Ferida aberta com diâmetro maior que 1 centímetro",
      gravidade: "Moderada",
    },
    {
      evento: "Abscesso",
      descricao: "Coleção de pus no local da vacinação",
      gravidade: "Moderada",
    },
    {
      evento: "Reação lupoide",
      descricao: "Lesão que não cicatriza adequadamente",
      gravidade: "Moderada",
    },
    {
      evento: "Enfartamento ganglionar",
      descricao: "Inchaço dos gânglios axilares (pode ser normal)",
      gravidade: "Leve",
    },
  ];

  const populacoesRisco = [
    {
      grupo: "PVHIV",
      risco: "Neuropatia periférica potencializada por ARV",
      cuidados: "Monitoramento neurológico, ajuste de Piridoxina",
    },
    {
      grupo: "Usuários de álcool",
      risco: "Hepatotoxicidade aumentada",
      cuidados: "Monitoramento hepático mais frequente",
    },
    {
      grupo: "Crianças",
      risco: "Maior sensibilidade a efeitos adversos",
      cuidados: "Doses ajustadas, monitoramento mensal",
    },
    {
      grupo: "Adolescentes",
      risco: "Toxicidade visual por Etambutol",
      cuidados: "Avaliação oftalmológica regular",
    },
    {
      grupo: "Lactentes",
      risco: "Toxicidade via amamentação",
      cuidados: "Piridoxina para mães em tratamento",
    },
  ];

  const dosagensVitamina = [
    {
      situacao: "Adultos (prevenção)",
      dose: "50mg/dia",
      observacao: "Dose padrão preventiva",
    },
    {
      situacao: "Com Linezolida/Terizidona",
      dose: "100mg/dia",
      observacao: "Dose aumentada para maior proteção",
    },
    {
      situacao: "Crianças TB/HIV",
      dose: "5-10mg/dia",
      observacao: "Dose ajustada ao peso",
    },
    {
      situacao: "Lactentes",
      dose: "1-2mg/kg/dia",
      observacao: "10-50mg/dia conforme peso",
    },
  ];

  const criteriosMonitoramento = [
    {
      parametro: "TGO/TGP",
      criterio: "≥3x LSN com sintomas ou ≥5x LSN sem sintomas",
      acao: "Suspensão temporária do tratamento",
    },
    {
      parametro: "Função renal",
      criterio: "Alterações significativas",
      acao: "Ajuste de doses em nefropatas",
    },
    {
      parametro: "Discriminação cores",
      criterio: "Alterações em adolescentes",
      acao: "Investigação oftalmológica",
    },
    {
      parametro: "Sintomas neurológicos",
      criterio: "Parestesias, dormência",
      acao: "Piridoxina, avaliação neurológica",
    },
  ];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.header}>
        <View style={styles.titleRow}>
          <Bug size={24} color="#f97316" />
          <Text style={styles.title}>Reações da Tuberculose</Text>
        </View>
        <Text style={styles.subtitle}>
          Reações aos medicamentos e eventos adversos da vacina
        </Text>
      </View>

      <Tabs defaultValue="medicamentos" style={styles.tabs}>
        <TabsList style={styles.tabsList}>
          <TabsTrigger value="medicamentos" style={styles.tabsTrigger}>
            <Text style={styles.tabsText}>Medicamentos</Text>
          </TabsTrigger>
          <TabsTrigger value="vacina" style={styles.tabsTrigger}>
            <Text style={styles.tabsText}>Vacina BCG</Text>
          </TabsTrigger>
          <TabsTrigger value="populacoes" style={styles.tabsTrigger}>
            <Text style={styles.tabsText}>Populações</Text>
          </TabsTrigger>
          <TabsTrigger value="monitoramento" style={styles.tabsTrigger}>
            <Text style={styles.tabsText}>Monitoramento</Text>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="medicamentos" style={styles.tabsContent}>
          <Alert style={styles.alert}>
            <AlertTriangle size={16} color="#f59e0b" />
            <AlertDescription style={styles.alertDescription}>
              As reações adversas são classificadas em "menores" (não requerem
              suspensão) e "maiores" (podem requerer suspensão do tratamento).
              Nunca suspenda o tratamento sem orientação médica.
            </AlertDescription>
          </Alert>

          <Card style={styles.card}>
            <CardHeader>
              <CardTitle style={styles.cardTitle}>
                <Shield size={20} color="#10b981" />
                <Text style={[styles.cardTitleText, { marginLeft: 8 }]}>
                  Reações Menores
                </Text>
              </CardTitle>
              <CardDescription style={styles.cardDescription}>
                Geralmente não requerem suspensão do tratamento
              </CardDescription>
            </CardHeader>
            <CardContent>
              <View style={styles.reacoesContainer}>
                {reacoesMedicamentos.menores.map((reacao, index) => (
                  <View
                    key={index}
                    style={[styles.reacaoItem, { borderLeftColor: "#10b981" }]}
                  >
                    <Text style={styles.reacaoTitulo}>{reacao.reacao}</Text>
                    <Text style={styles.reacaoDescricao}>
                      {reacao.descricao}
                    </Text>
                    <Badge variant="secondary" style={styles.manejoBadge}>
                      <Text style={styles.manejoText}>{reacao.manejo}</Text>
                    </Badge>
                  </View>
                ))}
              </View>
            </CardContent>
          </Card>

          <Card style={styles.card}>
            <CardHeader>
              <CardTitle style={styles.cardTitle}>
                <AlertTriangle size={20} color="#ef4444" />
                <Text style={[styles.cardTitleText, { marginLeft: 8 }]}>
                  Reações Maiores
                </Text>
              </CardTitle>
              <CardDescription style={styles.cardDescription}>
                Podem requerer suspensão ou substituição do medicamento
              </CardDescription>
            </CardHeader>
            <CardContent>
              <View style={styles.reacoesContainer}>
                {reacoesMedicamentos.maiores.map((reacao, index) => (
                  <View
                    key={index}
                    style={[styles.reacaoItem, { borderLeftColor: "#ef4444" }]}
                  >
                    <Text style={styles.reacaoTitulo}>{reacao.reacao}</Text>
                    <Text style={styles.reacaoDescricao}>
                      {reacao.descricao}
                    </Text>
                    <Badge
                      variant="destructive"
                      style={styles.manejoBadgeDestructive}
                    >
                      <Text style={styles.manejoTextDestructive}>
                        {reacao.manejo}
                      </Text>
                    </Badge>
                  </View>
                ))}
              </View>
            </CardContent>
          </Card>

          <Card style={styles.card}>
            <CardHeader>
              <CardTitle style={[styles.cardTitleText, { fontSize: 16 }]}>
                Piridoxina (Vitamina B6)
              </CardTitle>
              <CardDescription style={styles.cardDescription}>
                Prevenção e tratamento da neuropatia periférica
              </CardDescription>
            </CardHeader>
            <CardContent>
              <View style={styles.dosagensContainer}>
                {dosagensVitamina.map((item, index) => (
                  <View key={index} style={styles.dosagemItem}>
                    <View style={styles.dosagemInfo}>
                      <Text style={styles.dosagemSituacao}>
                        {item.situacao}
                      </Text>
                      <Text style={styles.dosagemObservacao}>
                        {item.observacao}
                      </Text>
                    </View>
                    <Badge variant="outline" style={styles.doseBadge}>
                      <Text style={styles.doseText}>{item.dose}</Text>
                    </Badge>
                  </View>
                ))}
              </View>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="vacina" style={styles.tabsContent}>
          <Alert style={styles.alert}>
            <Shield size={16} color="#10b981" />
            <AlertDescription style={styles.alertDescription}>
              Eventos adversos da vacina BCG devem ser notificados em até 24
              horas. A evolução normal da lesão vacinal pode levar meses e não
              deve ser confundida com eventos adversos.
            </AlertDescription>
          </Alert>

          <Card style={styles.card}>
            <CardHeader>
              <CardTitle style={styles.cardTitleText}>
                Eventos Adversos da Vacina BCG
              </CardTitle>
              <CardDescription style={styles.cardDescription}>
                Reações que podem ocorrer após a vacinação
              </CardDescription>
            </CardHeader>
            <CardContent>
              <View style={styles.eventosContainer}>
                {eventosVacina.map((evento, index) => (
                  <View key={index} style={styles.eventoItem}>
                    <View style={styles.eventoInfo}>
                      <Text style={styles.eventoTitulo}>{evento.evento}</Text>
                      <Text style={styles.eventoDescricao}>
                        {evento.descricao}
                      </Text>
                    </View>
                    <Badge
                      variant={
                        evento.gravidade === "Leve"
                          ? "secondary"
                          : evento.gravidade === "Moderada"
                          ? "default"
                          : "destructive"
                      }
                      style={styles.gravidadeBadge}
                    >
                      <Text
                        style={
                          evento.gravidade === "Leve"
                            ? styles.badgeSecondaryText
                            : evento.gravidade === "Moderada"
                            ? styles.badgeText
                            : styles.badgeDestructiveText
                        }
                      >
                        {evento.gravidade}
                      </Text>
                    </Badge>
                  </View>
                ))}
              </View>
            </CardContent>
          </Card>

          <Card style={styles.card}>
            <CardHeader>
              <CardTitle style={[styles.cardTitleText, { fontSize: 16 }]}>
                Critérios para Notificação
              </CardTitle>
            </CardHeader>
            <CardContent>
              <View style={styles.criteriosNotificacaoContainer}>
                <View
                  style={[
                    styles.criterioNotificacao,
                    { backgroundColor: "#fef3c7" },
                  ]}
                >
                  <AlertTriangle size={16} color="#f59e0b" />
                  <Text style={styles.criterioTexto}>
                    Úlcera com diâmetro maior que 1 cm
                  </Text>
                </View>
                <View
                  style={[
                    styles.criterioNotificacao,
                    { backgroundColor: "#dbeafe" },
                  ]}
                >
                  <Clock size={16} color="#3b82f6" />
                  <Text style={styles.criterioTexto}>
                    Notificar dentro de 24 horas após ocorrência
                  </Text>
                </View>
                <View
                  style={[
                    styles.criterioNotificacao,
                    { backgroundColor: "#d1fae5" },
                  ]}
                >
                  <Shield size={16} color="#10b981" />
                  <Text style={styles.criterioTexto}>
                    Enfartamento ganglionar axilar pode ser evolução normal
                  </Text>
                </View>
              </View>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="populacoes" style={styles.tabsContent}>
          <Card style={styles.card}>
            <CardHeader>
              <CardTitle style={styles.cardTitle}>
                <Users size={20} color="#a855f7" />
                <Text style={[styles.cardTitleText, { marginLeft: 8 }]}>
                  Populações de Risco
                </Text>
              </CardTitle>
              <CardDescription style={styles.cardDescription}>
                Grupos que requerem atenção especial para reações adversas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <View style={styles.populacoesContainer}>
                {populacoesRisco.map((pop, index) => (
                  <View
                    key={index}
                    style={[
                      styles.populacaoItem,
                      { borderLeftColor: "#a855f7" },
                    ]}
                  >
                    <View style={styles.populacaoHeader}>
                      <Text style={styles.populacaoTitulo}>{pop.grupo}</Text>
                      <Badge variant="outline" style={styles.riscoBadge}>
                        <Text style={styles.riscoText}>Alto Risco</Text>
                      </Badge>
                    </View>
                    <Text style={styles.riscoDescricao}>{pop.risco}</Text>
                    <Text style={[styles.cuidadosTexto, { color: "#7c3aed" }]}>
                      {pop.cuidados}
                    </Text>
                  </View>
                ))}
              </View>
            </CardContent>
          </Card>

          <Alert style={styles.alert}>
            <Users size={16} color="#6366f1" />
            <AlertDescription style={styles.alertDescription}>
              <Text style={styles.boldText}>Importante:</Text> Fármacos de
              segunda linha (usados em TB drogarresistente) possuem maior
              potencial de toxicidade e requerem manejo especializado em
              unidades de referência.
            </AlertDescription>
          </Alert>
        </TabsContent>

        <TabsContent value="monitoramento" style={styles.tabsContent}>
          <Card style={styles.card}>
            <CardHeader>
              <CardTitle style={styles.cardTitle}>
                <Activity size={20} color="#3b82f6" />
                <Text style={[styles.cardTitleText, { marginLeft: 8 }]}>
                  Critérios de Monitoramento
                </Text>
              </CardTitle>
              <CardDescription style={styles.cardDescription}>
                Parâmetros para acompanhamento e decisões clínicas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <View style={styles.monitoramentoContainer}>
                {criteriosMonitoramento.map((criterio, index) => (
                  <View key={index} style={styles.monitoramentoItem}>
                    <View style={styles.monitoramentoHeader}>
                      <Text style={styles.monitoramentoTitulo}>
                        {criterio.parametro}
                      </Text>
                      <Badge variant="outline" style={styles.criterioBadge}>
                        <Text style={styles.criterioTextoSmall}>Critério</Text>
                      </Badge>
                    </View>
                    <Text style={styles.criterioDescricao}>
                      {criterio.criterio}
                    </Text>
                    {/* <Separator style={styles.separator} /> */}
                    <Text style={[styles.acaoTexto, { color: "#2563eb" }]}>
                      {criterio.acao}
                    </Text>
                  </View>
                ))}
              </View>
            </CardContent>
          </Card>

          <Card style={styles.card}>
            <CardHeader>
              <CardTitle style={styles.cardTitle}>
                <Clock size={20} color="#10b981" />
                <Text
                  style={[
                    styles.cardTitleText,
                    { marginLeft: 8, fontSize: 16 },
                  ]}
                >
                  Frequência de Monitoramento
                </Text>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <View style={styles.frequenciaContainer}>
                <View
                  style={[
                    styles.frequenciaItem,
                    { borderLeftColor: "#10b981" },
                  ]}
                >
                  <Text style={styles.frequenciaTitulo}>Crianças</Text>
                  <Text style={styles.frequenciaDescricao}>
                    Monitoramento mensal ou a critério clínico
                  </Text>
                </View>
                <View
                  style={[
                    styles.frequenciaItem,
                    { borderLeftColor: "#3b82f6" },
                  ]}
                >
                  <Text style={styles.frequenciaTitulo}>ILTB</Text>
                  <Text style={styles.frequenciaDescricao}>
                    Intervalos de 30-60 dias
                  </Text>
                </View>
                <View
                  style={[
                    styles.frequenciaItem,
                    { borderLeftColor: "#f59e0b" },
                  ]}
                >
                  <Text style={styles.frequenciaTitulo}>
                    Usuários de álcool
                  </Text>
                  <Text style={styles.frequenciaDescricao}>
                    Função hepática com maior frequência
                  </Text>
                </View>
                <View
                  style={[
                    styles.frequenciaItem,
                    { borderLeftColor: "#a855f7" },
                  ]}
                >
                  <Text style={styles.frequenciaTitulo}>
                    TB Drogarresistente
                  </Text>
                  <Text style={styles.frequenciaDescricao}>
                    Acompanhamento em unidades de referência
                  </Text>
                </View>
              </View>
            </CardContent>
          </Card>

          <Alert style={styles.alert}>
            <Stethoscope size={16} color="#059669" />
            <AlertDescription style={styles.alertDescription}>
              <Text style={styles.boldText}>Lembre-se:</Text> Reações adversas
              "maiores" requerem encaminhamento para unidades de referência. A
              suspensão desnecessária do tratamento deve ser evitada para
              prevenir resistência medicamentosa.
            </AlertDescription>
          </Alert>
        </TabsContent>
      </Tabs>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  contentContainer: {
    padding: 16,
  },
  header: {
    marginBottom: 24,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 8,
    color: "#1e293b",
  },
  subtitle: {
    fontSize: 16,
    color: "#64748b",
  },
  tabs: {
    flex: 1,
  },
  tabsList: {
    marginBottom: 16,
  },
  tabsTrigger: {
    flex: 1,
  },
  tabsText: {
    fontSize: 12,
    fontWeight: "500",
  },
  tabsContent: {
    flex: 1,
  },
  alert: {
    marginBottom: 16,
  },
  alertDescription: {
    fontSize: 14,
    color: "#475569",
    lineHeight: 20,
  },
  boldText: {
    fontWeight: "600",
    color: "#1e293b",
  },
  card: {
    marginBottom: 16,
  },
  cardTitle: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardTitleText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1e293b",
  },
  cardDescription: {
    fontSize: 14,
    color: "#64748b",
    marginTop: 4,
  },
  reacoesContainer: {
    gap: 16,
  },
  reacaoItem: {
    borderLeftWidth: 4,
    paddingLeft: 16,
    paddingVertical: 8,
  },
  reacaoTitulo: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1e293b",
  },
  reacaoDescricao: {
    fontSize: 14,
    color: "#64748b",
    marginVertical: 8,
  },
  manejoBadge: {
    alignSelf: "flex-start",
    backgroundColor: "#e2e8f0",
  },
  manejoText: {
    fontSize: 12,
    color: "#475569",
  },
  manejoBadgeDestructive: {
    alignSelf: "flex-start",
    backgroundColor: "#dc2626",
  },
  manejoTextDestructive: {
    fontSize: 12,
    color: "#ffffff",
  },
  dosagensContainer: {
    gap: 12,
  },
  dosagemItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    borderRadius: 8,
  },
  dosagemInfo: {
    flex: 1,
  },
  dosagemSituacao: {
    fontSize: 14,
    fontWeight: "500",
    color: "#1e293b",
  },
  dosagemObservacao: {
    fontSize: 12,
    color: "#64748b",
    marginTop: 2,
  },
  doseBadge: {
    marginLeft: 12,
  },
  doseText: {
    fontSize: 12,
    color: "#475569",
    fontWeight: "600",
  },
  eventosContainer: {
    gap: 12,
  },
  eventoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: 12,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    borderRadius: 8,
  },
  eventoInfo: {
    flex: 1,
  },
  eventoTitulo: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1e293b",
  },
  eventoDescricao: {
    fontSize: 14,
    color: "#64748b",
    marginTop: 2,
  },
  gravidadeBadge: {
    marginLeft: 12,
  },
  badgeSecondaryText: {
    fontSize: 12,
    color: "#475569",
  },
  badgeText: {
    fontSize: 12,
    color: "#1f2937",
  },
  badgeDestructiveText: {
    fontSize: 12,
    color: "#ffffff",
  },
  criteriosNotificacaoContainer: {
    gap: 12,
  },
  criterioNotificacao: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    padding: 8,
    borderRadius: 8,
  },
  criterioTexto: {
    fontSize: 14,
    color: "#1e293b",
  },
  populacoesContainer: {
    gap: 16,
  },
  populacaoItem: {
    borderLeftWidth: 4,
    paddingLeft: 16,
    paddingVertical: 12,
  },
  populacaoHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 8,
  },
  populacaoTitulo: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1e293b",
    flex: 1,
  },
  riscoBadge: {
    marginLeft: 8,
  },
  riscoText: {
    fontSize: 12,
    color: "#475569",
  },
  riscoDescricao: {
    fontSize: 14,
    color: "#64748b",
    marginBottom: 8,
  },
  cuidadosTexto: {
    fontSize: 14,
    fontWeight: "500",
  },
  monitoramentoContainer: {
    gap: 16,
  },
  monitoramentoItem: {
    borderWidth: 1,
    borderColor: "#e2e8f0",
    borderRadius: 8,
    padding: 16,
  },
  monitoramentoHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 8,
  },
  monitoramentoTitulo: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1e293b",
    flex: 1,
  },
  criterioBadge: {
    marginLeft: 8,
  },
  criterioTextoSmall: {
    fontSize: 12,
    color: "#475569",
  },
  criterioDescricao: {
    fontSize: 14,
    color: "#64748b",
    marginBottom: 8,
  },
  separator: {
    marginVertical: 8,
  },
  acaoTexto: {
    fontSize: 14,
    fontWeight: "500",
  },
  frequenciaContainer: {
    gap: 12,
  },
  frequenciaItem: {
    borderLeftWidth: 4,
    paddingLeft: 12,
  },
  frequenciaTitulo: {
    fontSize: 14,
    fontWeight: "500",
    color: "#1e293b",
  },
  frequenciaDescricao: {
    fontSize: 14,
    color: "#64748b",
    marginTop: 2,
  },
});
