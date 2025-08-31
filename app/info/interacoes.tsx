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
import { Alert, AlertDescription } from "@/components/ui/Alert";
// import { Separator } from "@/components/ui/separator";
import {
  Pill,
  AlertTriangle,
  Activity,
  Users,
  Clock,
  Stethoscope,
  Calculator,
} from "lucide-react-native";

export default function InteracoesScreen() {
  const tiposInteracoes = {
    absorcao: [
      {
        medicamento: "Antiácidos",
        efeito: "Reduzem absorção de Rifampicina, Isoniazida, Etambutol",
        mecanismo: "Aumentam pH gástrico (fármacos antiTB precisam meio ácido)",
        manejo: "Administrar em horários separados",
      },
      {
        medicamento: "Clofazimina",
        efeito: "Diminui absorção da Rifampicina",
        mecanismo: "Competição na absorção intestinal",
        manejo: "Monitorar eficácia, considerar ajuste de dose",
      },
      {
        medicamento: "Zinco e Ferro",
        efeito: "Reduzem absorção de fluoroquinolonas",
        mecanismo: "Formação de complexos quelantes",
        manejo: "Administrar com intervalo de 2-4 horas",
      },
      {
        medicamento: "Imidazole derivados",
        efeito: "Reduzem absorção da Isoniazida",
        mecanismo: "Alteração do pH gástrico",
        manejo: "Monitorar resposta terapêutica",
      },
    ],
    metabolismo: [
      {
        medicamento: "Contraceptivos orais",
        efeito: "Rifampicina reduz eficácia",
        mecanismo: "Indução enzimática (CYP450)",
        manejo: "Métodos contraceptivos alternativos",
      },
      {
        medicamento: "Hipoglicemiantes orais",
        efeito: "Rifampicina reduz eficácia",
        mecanismo: "Indução enzimática",
        manejo: "Monitorar glicemia, ajustar doses",
      },
      {
        medicamento: "Benzodiazepínicos",
        efeito: "Isoniazida potencializa efeito",
        mecanismo: "Inibição do metabolismo",
        manejo: "Reduzir dose, monitorar sedação",
      },
      {
        medicamento: "Metformina",
        efeito: "Isoniazida diminui ação",
        mecanismo: "Interferência na ação celular",
        manejo: "Monitorar glicemia, ajustar dose",
      },
    ],
    toxicidade: [
      {
        medicamento: "Fenilhidantoína",
        efeito: "Aumenta hepatotoxicidade com Isoniazida/Rifampicina",
        mecanismo: "Sinergismo na toxicidade hepática",
        manejo: "Monitoramento hepático intensivo",
      },
      {
        medicamento: "Acetaminofen",
        efeito: "Aumenta hepatotoxicidade com Isoniazida",
        mecanismo: "Sobrecarga metabólica hepática",
        manejo: "Evitar uso concomitante ou reduzir doses",
      },
      {
        medicamento: "Antiarrítmicos",
        efeito: "Fluoroquinolonas causam bradiarritmia",
        mecanismo: "Efeitos aditivos no sistema de condução",
        manejo: "Monitoramento cardíaco, ECG",
      },
      {
        medicamento: "Agentes serotoninérgicos",
        efeito: "Linezolida causa síndrome da serotonina",
        mecanismo: "Inibição da MAO",
        manejo: "Evitar uso concomitante",
      },
    ],
  };

  const populacoesEspeciais = [
    {
      grupo: "PVHIV",
      riscos: [
        "Sobreposição de efeitos adversos com ARVs",
        "Neuropatia periférica potencializada",
        "Interações com inibidores de protease",
      ],
      cuidados: [
        "Esquemas sem Rifampicina são menos eficazes",
        "Considerar Rifabutina com PI/r",
        "Piridoxina profilática obrigatória",
      ],
    },
    {
      grupo: "Diabéticos",
      riscos: [
        "Alteração do controle glicêmico",
        "Interação com hipoglicemiantes",
        "Risco aumentado de neuropatia",
      ],
      cuidados: [
        "Monitoramento glicêmico frequente",
        "Ajuste de doses de antidiabéticos",
        "Piridoxina preventiva",
      ],
    },
    {
      grupo: "Hepatopatas",
      riscos: [
        "Hepatotoxicidade aumentada",
        "Metabolismo alterado",
        "Interações com outros hepatotóxicos",
      ],
      cuidados: [
        "Monitoramento hepático intensivo",
        "Considerar esquemas alternativos",
        "Evitar álcool e hepatotóxicos",
      ],
    },
    {
      grupo: "Nefropatas",
      riscos: [
        "Acúmulo de medicamentos",
        "Toxicidade aumentada",
        "Alteração da eliminação",
      ],
      cuidados: [
        "Ajuste de doses conforme clearance",
        "Administração pós-hemodiálise",
        "Monitoramento renal frequente",
      ],
    },
  ];

  const estrategiasManejo = [
    {
      estrategia: "Ajuste de Horário",
      aplicacao: "Antiácidos vs antiTB",
      detalhes: "Intervalo de 2-4 horas entre administrações",
      eficacia: "Alta para interações de absorção",
    },
    {
      estrategia: "Substituição de Fármacos",
      aplicacao: "Rifabutina vs Rifampicina",
      detalhes: "Em pacientes com ARVs inibidores de protease",
      eficacia: "Muito alta para interações específicas",
    },
    {
      estrategia: "Ajuste de Dose",
      aplicacao: "Hipoglicemiantes, corticoides",
      detalhes: "Modificação baseada na indução enzimática",
      eficacia: "Moderada, requer monitoramento",
    },
    {
      estrategia: "Profilaxia",
      aplicacao: "Piridoxina com Isoniazida",
      detalhes: "50-100mg/dia conforme risco",
      eficacia: "Alta para prevenção de neuropatia",
    },
    {
      estrategia: "Evitar Uso Concomitante",
      aplicacao: "Linezolida + serotoninérgicos",
      detalhes: "Risco de síndrome da serotonina",
      eficacia: "Absoluta para interações graves",
    },
  ];

  const criteriosMonitoramento = [
    {
      parametro: "Função Hepática",
      frequencia: "Mensal ou mais frequente",
      criterio: "TGO/TGP ≥3x LSN com sintomas",
      acao: "Suspensão temporária",
    },
    {
      parametro: "Glicemia",
      frequencia: "Semanal em diabéticos",
      criterio: "Descontrole glicêmico",
      acao: "Ajuste de antidiabéticos",
    },
    {
      parametro: "Função Renal",
      frequencia: "Mensal em nefropatas",
      criterio: "Alteração do clearance",
      acao: "Ajuste de doses",
    },
    {
      parametro: "ECG",
      frequencia: "Conforme indicação",
      criterio: "Alterações de condução",
      acao: "Avaliação cardiológica",
    },
  ];

  const dosagensEspeciais = [
    {
      situacao: "Piridoxina padrão",
      dose: "50mg/dia",
      indicacao: "Prevenção de neuropatia",
    },
    {
      situacao: "Piridoxina com ARVs",
      dose: "100mg/dia",
      indicacao: "PVHIV com risco aumentado",
    },
    {
      situacao: "Rifabutina com PI/r",
      dose: "150mg 3x/semana",
      indicacao: "Redução por interação",
    },
    {
      situacao: "Restrição tiramina",
      dose: "<100mg/dia",
      indicacao: "Com Linezolida (MAO)",
    },
  ];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.header}>
        <View style={styles.titleRow}>
          <Pill size={24} color="#a855f7" />
          <Text style={styles.title}>Interações Medicamentosas</Text>
        </View>
        <Text style={styles.subtitle}>
          Interações dos medicamentos antiTB com outros fármacos
        </Text>
      </View>

      <Tabs defaultValue="tipos" style={styles.tabs}>
        <TabsList style={styles.tabsList}>
          <TabsTrigger value="tipos" style={styles.tabsTrigger}>
            <Text style={styles.tabsText}>Tipos</Text>
          </TabsTrigger>
          <TabsTrigger value="populacoes" style={styles.tabsTrigger}>
            <Text style={styles.tabsText}>Populações</Text>
          </TabsTrigger>
          <TabsTrigger value="manejo" style={styles.tabsTrigger}>
            <Text style={styles.tabsText}>Manejo</Text>
          </TabsTrigger>
          <TabsTrigger value="monitoramento" style={styles.tabsTrigger}>
            <Text style={styles.tabsText}>Monitoramento</Text>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="tipos" style={styles.tabsContent}>
          <Alert style={styles.alert}>
            <AlertTriangle size={16} color="#f59e0b" />
            <AlertDescription style={styles.alertDescription}>
              As interações podem ocorrer na absorção ou no metabolismo dos
              medicamentos, afetando a eficácia do tratamento ou aumentando a
              toxicidade. Sempre informe todos os medicamentos que você usa.
            </AlertDescription>
          </Alert>

          <Card style={styles.card}>
            <CardHeader>
              <CardTitle style={styles.cardTitle}>
                <Activity size={20} color="#3b82f6" />
                <Text style={[styles.cardTitleText, { marginLeft: 8 }]}>
                  Interações na Absorção
                </Text>
              </CardTitle>
              <CardDescription style={styles.cardDescription}>
                Medicamentos que afetam a absorção dos antiTB
              </CardDescription>
            </CardHeader>
            <CardContent>
              <View style={styles.interactionsContainer}>
                {tiposInteracoes.absorcao.map((interacao, index) => (
                  <View
                    key={index}
                    style={[
                      styles.interactionItem,
                      { borderLeftColor: "#3b82f6" },
                    ]}
                  >
                    <View style={styles.interactionHeader}>
                      <Text style={styles.medicamentoName}>
                        {interacao.medicamento}
                      </Text>
                      <Badge variant="outline" style={styles.badge}>
                        <Text style={styles.badgeText}>Absorção</Text>
                      </Badge>
                    </View>
                    <Text style={styles.efeitoText}>{interacao.efeito}</Text>
                    <Text style={styles.mecanismoText}>
                      {interacao.mecanismo}
                    </Text>
                    <Badge variant="secondary" style={styles.manejoBadge}>
                      <Text style={styles.manojoBadgeText}>
                        {interacao.manejo}
                      </Text>
                    </Badge>
                  </View>
                ))}
              </View>
            </CardContent>
          </Card>

          <Card style={styles.card}>
            <CardHeader>
              <CardTitle style={styles.cardTitle}>
                <Stethoscope size={20} color="#10b981" />
                <Text style={[styles.cardTitleText, { marginLeft: 8 }]}>
                  Interações no Metabolismo
                </Text>
              </CardTitle>
              <CardDescription style={styles.cardDescription}>
                Alterações na eficácia por indução/inibição enzimática
              </CardDescription>
            </CardHeader>
            <CardContent>
              <View style={styles.interactionsContainer}>
                {tiposInteracoes.metabolismo.map((interacao, index) => (
                  <View
                    key={index}
                    style={[
                      styles.interactionItem,
                      { borderLeftColor: "#10b981" },
                    ]}
                  >
                    <View style={styles.interactionHeader}>
                      <Text style={styles.medicamentoName}>
                        {interacao.medicamento}
                      </Text>
                      <Badge variant="outline" style={styles.badge}>
                        <Text style={styles.badgeText}>Metabolismo</Text>
                      </Badge>
                    </View>
                    <Text style={styles.efeitoText}>{interacao.efeito}</Text>
                    <Text style={styles.mecanismoText}>
                      {interacao.mecanismo}
                    </Text>
                    <Badge variant="secondary" style={styles.manejoBadge}>
                      <Text style={styles.manojoBadgeText}>
                        {interacao.manejo}
                      </Text>
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
                  Aumento de Toxicidade
                </Text>
              </CardTitle>
              <CardDescription style={styles.cardDescription}>
                Interações que aumentam o risco de efeitos adversos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <View style={styles.interactionsContainer}>
                {tiposInteracoes.toxicidade.map((interacao, index) => (
                  <View
                    key={index}
                    style={[
                      styles.interactionItem,
                      { borderLeftColor: "#ef4444" },
                    ]}
                  >
                    <View style={styles.interactionHeader}>
                      <Text style={styles.medicamentoName}>
                        {interacao.medicamento}
                      </Text>
                      <Badge
                        variant="destructive"
                        style={styles.badgeDestructive}
                      >
                        <Text style={styles.badgeDestructiveText}>
                          Toxicidade
                        </Text>
                      </Badge>
                    </View>
                    <Text style={styles.efeitoText}>{interacao.efeito}</Text>
                    <Text style={styles.mecanismoText}>
                      {interacao.mecanismo}
                    </Text>
                    <Badge variant="outline" style={styles.badge}>
                      <Text style={styles.badgeText}>{interacao.manejo}</Text>
                    </Badge>
                  </View>
                ))}
              </View>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="populacoes" style={styles.tabsContent}>
          <Alert style={styles.alert}>
            <Users size={16} color="#6366f1" />
            <AlertDescription style={styles.alertDescription}>
              Pacientes com comorbidades ou em uso de múltiplos medicamentos
              requerem atenção especial para interações medicamentosas e
              monitoramento diferenciado.
            </AlertDescription>
          </Alert>

          <View style={styles.populacoesContainer}>
            {populacoesEspeciais.map((pop, index) => (
              <Card key={index} style={styles.card}>
                <CardHeader>
                  <CardTitle style={styles.cardTitle}>
                    <Users size={16} color="#a855f7" />
                    <Text
                      style={[
                        styles.cardTitleText,
                        { marginLeft: 8, fontSize: 16 },
                      ]}
                    >
                      {pop.grupo}
                    </Text>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <View style={styles.populacaoContent}>
                    <View style={styles.populacaoSection}>
                      <Text style={[styles.sectionTitle, { color: "#dc2626" }]}>
                        Riscos Principais:
                      </Text>
                      <View style={styles.listContainer}>
                        {pop.riscos.map((risco, idx) => (
                          <View key={idx} style={styles.listItem}>
                            <View
                              style={[
                                styles.bullet,
                                { backgroundColor: "#dc2626" },
                              ]}
                            />
                            <Text style={styles.listText}>{risco}</Text>
                          </View>
                        ))}
                      </View>
                    </View>
                    <View style={styles.populacaoSection}>
                      <Text style={[styles.sectionTitle, { color: "#059669" }]}>
                        Cuidados Especiais:
                      </Text>
                      <View style={styles.listContainer}>
                        {pop.cuidados.map((cuidado, idx) => (
                          <View key={idx} style={styles.listItem}>
                            <View
                              style={[
                                styles.bullet,
                                { backgroundColor: "#059669" },
                              ]}
                            />
                            <Text style={styles.listText}>{cuidado}</Text>
                          </View>
                        ))}
                      </View>
                    </View>
                  </View>
                </CardContent>
              </Card>
            ))}
          </View>
        </TabsContent>

        <TabsContent value="manejo" style={styles.tabsContent}>
          <Card style={styles.card}>
            <CardHeader>
              <CardTitle style={styles.cardTitleText}>
                Estratégias de Manejo
              </CardTitle>
              <CardDescription style={styles.cardDescription}>
                Abordagens para prevenir e manejar interações medicamentosas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <View style={styles.estrategiasContainer}>
                {estrategiasManejo.map((estrategia, index) => (
                  <View key={index} style={styles.estrategiaItem}>
                    <View style={styles.estrategiaHeader}>
                      <Text style={styles.estrategiaTitulo}>
                        {estrategia.estrategia}
                      </Text>
                      <Badge
                        variant={
                          estrategia.eficacia.includes("Muito alta")
                            ? "default"
                            : estrategia.eficacia.includes("Alta")
                            ? "secondary"
                            : "outline"
                        }
                        style={styles.badge}
                      >
                        <Text style={styles.badgeText}>
                          {estrategia.eficacia.split(" ")[0]}
                        </Text>
                      </Badge>
                    </View>
                    <Text style={styles.aplicacaoText}>
                      <Text style={styles.boldText}>Aplicação:</Text>{" "}
                      {estrategia.aplicacao}
                    </Text>
                    <Text style={styles.detalhesText}>
                      {estrategia.detalhes}
                    </Text>
                    {/* <Separator style={styles.separator} /> */}
                    <Text style={styles.eficaciaText}>
                      {estrategia.eficacia}
                    </Text>
                  </View>
                ))}
              </View>
            </CardContent>
          </Card>

          <Card style={styles.card}>
            <CardHeader>
              <CardTitle style={[styles.cardTitleText, { fontSize: 16 }]}>
                Dosagens Especiais
              </CardTitle>
              <CardDescription style={styles.cardDescription}>
                Ajustes de dose devido a interações
              </CardDescription>
            </CardHeader>
            <CardContent>
              <View style={styles.dosagensContainer}>
                {dosagensEspeciais.map((item, index) => (
                  <View key={index} style={styles.dosagemItem}>
                    <View style={styles.dosagemInfo}>
                      <Text style={styles.situacaoText}>{item.situacao}</Text>
                      <Text style={styles.indicacaoText}>{item.indicacao}</Text>
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

        <TabsContent value="monitoramento" style={styles.tabsContent}>
          <Card style={styles.card}>
            <CardHeader>
              <CardTitle style={styles.cardTitle}>
                <Calculator size={20} color="#3b82f6" />
                <Text style={[styles.cardTitleText, { marginLeft: 8 }]}>
                  Critérios de Monitoramento
                </Text>
              </CardTitle>
              <CardDescription style={styles.cardDescription}>
                Parâmetros para acompanhamento de interações
              </CardDescription>
            </CardHeader>
            <CardContent>
              <View style={styles.criteriosContainer}>
                {criteriosMonitoramento.map((criterio, index) => (
                  <View key={index} style={styles.criterioItem}>
                    <View style={styles.criterioHeader}>
                      <Text style={styles.criterioTitulo}>
                        {criterio.parametro}
                      </Text>
                      <Badge variant="outline" style={styles.badge}>
                        <Text style={styles.badgeText}>
                          {criterio.frequencia}
                        </Text>
                      </Badge>
                    </View>
                    <Text style={styles.criterioText}>
                      <Text style={styles.boldText}>Critério:</Text>{" "}
                      {criterio.criterio}
                    </Text>
                    {/* <Separator style={styles.separator} /> */}
                    <Text style={styles.acaoText}>{criterio.acao}</Text>
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
                  Momentos Críticos
                </Text>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <View style={styles.momentosContainer}>
                <View
                  style={[styles.momentoItem, { borderLeftColor: "#10b981" }]}
                >
                  <Text style={styles.momentoTitulo}>Início do Tratamento</Text>
                  <Text style={styles.momentoDescricao}>
                    Avaliação completa de medicamentos em uso
                  </Text>
                </View>
                <View
                  style={[styles.momentoItem, { borderLeftColor: "#3b82f6" }]}
                >
                  <Text style={styles.momentoTitulo}>
                    Introdução de TARV (PVHIV)
                  </Text>
                  <Text style={styles.momentoDescricao}>
                    2ª ou 8ª semana conforme CD4+
                  </Text>
                </View>
                <View
                  style={[styles.momentoItem, { borderLeftColor: "#f59e0b" }]}
                >
                  <Text style={styles.momentoTitulo}>
                    Mudanças de Medicação
                  </Text>
                  <Text style={styles.momentoDescricao}>
                    Reavaliação de interações a cada alteração
                  </Text>
                </View>
                <View
                  style={[styles.momentoItem, { borderLeftColor: "#a855f7" }]}
                >
                  <Text style={styles.momentoTitulo}>Consultas Mensais</Text>
                  <Text style={styles.momentoDescricao}>
                    Monitoramento contínuo de efeitos adversos
                  </Text>
                </View>
              </View>
            </CardContent>
          </Card>

          <Alert style={styles.alert}>
            <Stethoscope size={16} color="#059669" />
            <AlertDescription style={styles.alertDescription}>
              <Text style={styles.boldText}>Importante:</Text> O Projeto
              Terapêutico Singular (PTS) é uma ferramenta valiosa para manejar
              casos complexos com múltiplas medicações e comorbidades,
              considerando a integralidade do paciente.
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
  interactionsContainer: {
    gap: 16,
  },
  interactionItem: {
    borderLeftWidth: 4,
    paddingLeft: 16,
    paddingVertical: 12,
    backgroundColor: "#f8fafc",
    borderRadius: 8,
  },
  interactionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 8,
  },
  medicamentoName: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1e293b",
    flex: 1,
  },
  badge: {
    marginLeft: 8,
  },
  badgeText: {
    fontSize: 12,
    color: "#475569",
  },
  badgeDestructive: {
    backgroundColor: "#dc2626",
    marginLeft: 8,
  },
  badgeDestructiveText: {
    fontSize: 12,
    color: "#ffffff",
  },
  efeitoText: {
    fontSize: 14,
    color: "#64748b",
    marginBottom: 4,
  },
  mecanismoText: {
    fontSize: 12,
    color: "#64748b",
    marginBottom: 8,
  },
  manejoBadge: {
    backgroundColor: "#e2e8f0",
    alignSelf: "flex-start",
  },
  manojoBadgeText: {
    fontSize: 12,
    color: "#475569",
  },
  populacoesContainer: {
    gap: 16,
  },
  populacaoContent: {
    gap: 16,
  },
  populacaoSection: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 8,
  },
  listContainer: {
    gap: 4,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginTop: 6,
  },
  listText: {
    fontSize: 14,
    color: "#64748b",
    flex: 1,
    lineHeight: 20,
  },
  estrategiasContainer: {
    gap: 16,
  },
  estrategiaItem: {
    borderWidth: 1,
    borderColor: "#e2e8f0",
    borderRadius: 8,
    padding: 16,
  },
  estrategiaHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 8,
  },
  estrategiaTitulo: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1e293b",
    flex: 1,
  },
  aplicacaoText: {
    fontSize: 14,
    color: "#64748b",
    marginBottom: 4,
  },
  boldText: {
    fontWeight: "600",
    color: "#1e293b",
  },
  detalhesText: {
    fontSize: 14,
    color: "#64748b",
    marginBottom: 8,
  },
  separator: {
    marginVertical: 8,
  },
  eficaciaText: {
    fontSize: 12,
    color: "#64748b",
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
  situacaoText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#1e293b",
  },
  indicacaoText: {
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
  criteriosContainer: {
    gap: 16,
  },
  criterioItem: {
    borderWidth: 1,
    borderColor: "#e2e8f0",
    borderRadius: 8,
    padding: 16,
  },
  criterioHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 8,
  },
  criterioTitulo: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1e293b",
    flex: 1,
  },
  criterioText: {
    fontSize: 14,
    color: "#64748b",
    marginBottom: 8,
  },
  acaoText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#2563eb",
  },
  momentosContainer: {
    gap: 12,
  },
  momentoItem: {
    borderLeftWidth: 4,
    paddingLeft: 12,
  },
  momentoTitulo: {
    fontSize: 14,
    fontWeight: "500",
    color: "#1e293b",
  },
  momentoDescricao: {
    fontSize: 14,
    color: "#64748b",
    marginTop: 2,
  },
});
