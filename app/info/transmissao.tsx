import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import {
  ArrowLeft,
  Droplets,
  Wind,
  Shield,
  Users,
  MapPin,
  Clock,
  Activity,
  Calculator,
} from 'lucide-react-native';

import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription,
  Badge,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Progress,
  Alert,
  AlertDescription
} from '@/components/ui';
import { theme } from '@/styles/theme';

export default function TransmissaoPage() {
  const router = useRouter();

  const mecanismoTransmissao = [
    {
      etapa: "1. Pessoa Bacilífera",
      descricao: "Paciente com TB pulmonar elimina bacilos",
      detalhes: "Tosse, espirro, fala produzem gotículas",
      risco: "Alto",
    },
    {
      etapa: "2. Aerossóis no Ar",
      descricao: "Gotículas permanecem suspensas no ambiente",
      detalhes: "Duração: 5-12 horas (conforme ventilação)",
      risco: "Variável",
    },
    {
      etapa: "3. Inalação",
      descricao: "Outras pessoas inalam as gotículas infectadas",
      detalhes: "Especialmente em locais mal ventilados",
      risco: "Alto",
    },
    {
      etapa: "4. Infecção",
      descricao: "M. tuberculosis se instala nos pulmões",
      detalhes: "Pode evoluir para doença ativa ou latente",
      risco: "Moderado",
    },
  ];

  const fatoresRisco = [
    {
      fator: "Ventilação Inadequada",
      impacto: "Muito Alto",
      descricao: "Ambientes fechados concentram aerossóis",
      medida: "Ventilação natural/mecânica adequada",
    },
    {
      fator: "Aglomeração",
      impacto: "Alto",
      descricao: "Muitas pessoas em espaço reduzido",
      medida: "Controle de fluxo, distanciamento",
    },
    {
      fator: "Tempo de Exposição",
      impacto: "Alto",
      descricao: "Maior tempo = maior risco",
      medida: "Agilizar atendimento de SR",
    },
    {
      fator: "Carga Bacilar",
      impacto: "Muito Alto",
      descricao: "Baciloscopia positiva = maior transmissão",
      medida: "Diagnóstico e tratamento precoces",
    },
    {
      fator: "Ausência de Tratamento",
      impacto: "Máximo",
      descricao: "Paciente não tratado mantém transmissão",
      medida: "Busca ativa, início imediato do tratamento",
    },
  ];

  const locaisRisco = [
    {
      local: "Serviços de Saúde",
      risco: "Muito Alto",
      populacao: "Profissionais, pacientes, visitantes",
      medidas: ["Triagem de SR", "Ventilação adequada", "Máscaras PFF2/N95", "Fluxo ágil"],
    },
    {
      local: "Prisões",
      risco: "Muito Alto",
      populacao: "Pessoas privadas de liberdade",
      medidas: ["Rastreamento 2x/ano", "Isolamento respiratório", "Ventilação", "Busca ativa"],
    },
    {
      local: "Domicílios",
      risco: "Alto",
      populacao: "Familiares, contatos íntimos",
      medidas: ["Investigação de contatos", "Ventilação natural", "Etiqueta da tosse"],
    },
    {
      local: "Albergues/Asilos",
      risco: "Alto",
      populacao: "Pessoas em situação de vulnerabilidade",
      medidas: ["Triagem regular", "Isolamento de casos", "Ventilação", "Educação"],
    },
    {
      local: "Hospitais (UTI/Emergência)",
      risco: "Muito Alto",
      populacao: "Pacientes graves, profissionais",
      medidas: ["Isolamento respiratório", "Pressão negativa", "EPI adequado"],
    },
  ];

  const medidasControle = {
    administrativas: [
      "Identificação rápida de sintomáticos respiratórios",
      "Educação sobre etiqueta da tosse",
      "Oferta de máscara cirúrgica para SR",
      "Agilização do fluxo de atendimento",
      "Redução do tempo em áreas comuns",
      "Educação permanente de profissionais",
      "Protocolos de triagem e isolamento",
    ],
    ambientais: [
      "Ventilação natural adequada",
      "Ventilação mecânica quando necessário",
      "Uso de luz solar (bactericida)",
      "Isolamento respiratório com pressão negativa",
      "Renovação do ar (mínimo 6 trocas/hora)",
      "Separação de fluxos (SR vs outros pacientes)",
      "Manutenção de sistemas de ventilação",
    ],
    protecao: [
      "Máscaras PFF2/N95 para profissionais",
      "Máscaras cirúrgicas para pacientes SR",
      "EPI adequado em procedimentos de risco",
      "Treinamento sobre uso correto de EPI",
      "Teste de vedação de máscaras",
      "Substituição regular de equipamentos",
    ],
  };

  const cronologiaTransmissao = [
    {
      periodo: "Antes do Tratamento",
      transmissibilidade: 100,
      descricao: "Paciente bacilífero com máxima capacidade de transmissão",
      cor: theme.colors.danger.DEFAULT,
    },
    {
      periodo: "1ª Semana de Tratamento",
      transmissibilidade: 70,
      descricao: "Redução inicial da carga bacilar",
      cor: theme.colors.warning.DEFAULT,
    },
    {
      periodo: "2ª Semana de Tratamento",
      transmissibilidade: 30,
      descricao: "Redução significativa da transmissibilidade",
      cor: theme.colors.warning[400],
    },
    {
      periodo: "3ª Semana de Tratamento",
      transmissibilidade: 10,
      descricao: "Transmissibilidade muito baixa",
      cor: theme.colors.success.DEFAULT,
    },
    {
      periodo: "Após 3 Semanas",
      transmissibilidade: 5,
      descricao: "Risco mínimo de transmissão",
      cor: theme.colors.success[600],
    },
  ];

  const criteriosQuantitativos = [
    {
      parametro: "Duração da Tosse (SR)",
      populacaoGeral: "≥2-3 semanas",
      gruposRisco: "Qualquer duração",
      observacao: "Contatos, PVHIV, PPL, PSR",
    },
    {
      parametro: "Renovação do Ar",
      populacaoGeral: "6 trocas/hora",
      gruposRisco: "≥12 trocas/hora",
      observacao: "Isolamento respiratório",
    },
    {
      parametro: "Tempo para Não Transmissão",
      populacaoGeral: "2-3 semanas",
      gruposRisco: "Variável",
      observacao: "Com tratamento efetivo",
    },
    {
      parametro: "Permanência no Ambiente",
      populacaoGeral: "5-12 horas",
      gruposRisco: "Até 12 horas",
      observacao: "Conforme ventilação/luz",
    },
    {
      parametro: "Frequência TDO",
      populacaoGeral: "≥3x/semana",
      gruposRisco: "Diário",
      observacao: "Para reduzir carga bacilar",
    },
  ];

  const populacoesVulneraveis = [
    {
      grupo: "Profissionais de Saúde",
      risco: "Ocupacional",
      exposicao: "Diária",
      protecao: "EPI, ventilação, protocolos",
    },
    {
      grupo: "Contatos Domiciliares",
      risco: "Íntimo",
      exposicao: "Prolongada",
      protecao: "Investigação, ventilação natural",
    },
    {
      grupo: "Pessoas Privadas de Liberdade",
      risco: "Institucional",
      exposicao: "Contínua",
      protecao: "Rastreamento, isolamento",
    },
    {
      grupo: "Pessoas em Situação de Rua",
      risco: "Social",
      exposicao: "Variável",
      protecao: "Busca ativa, abrigos ventilados",
    },
    {
      grupo: "PVHIV",
      risco: "Imunológico",
      exposicao: "Qualquer",
      protecao: "Diagnóstico precoce, TARV",
    },
  ];

  const getRiscoBadgeStyle = (risco: string) => {
    switch (risco) {
      case "Alto":
        return { backgroundColor: theme.colors.danger[100], color: theme.colors.danger[700] };
      case "Moderado":
        return { backgroundColor: theme.colors.warning[100], color: theme.colors.warning[700] };
      case "Variável":
        return { backgroundColor: theme.colors.info[100], color: theme.colors.info[700] };
      default:
        return { backgroundColor: theme.colors.muted.DEFAULT, color: theme.colors.muted.foreground };
    }
  };

  const getImpactoBadgeStyle = (impacto: string) => {
    if (impacto === "Máximo" || impacto === "Muito Alto") {
      return { backgroundColor: theme.colors.danger[100], color: theme.colors.danger[700] };
    } else if (impacto === "Alto") {
      return { backgroundColor: theme.colors.warning[100], color: theme.colors.warning[700] };
    } else {
      return { backgroundColor: theme.colors.info[100], color: theme.colors.info[700] };
    }
  };

  const getRiscoLocalBadgeStyle = (risco: string) => {
    return risco === "Muito Alto" 
      ? { backgroundColor: theme.colors.danger[100], color: theme.colors.danger[700] }
      : { backgroundColor: theme.colors.warning[100], color: theme.colors.warning[700] };
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <ArrowLeft color={theme.colors.foreground} size={20} />
          </TouchableOpacity>
          <View style={styles.headerContent}>
            <View style={styles.headerTitleContainer}>
              <Droplets color={theme.colors.primary.DEFAULT} size={24} />
              <Text style={styles.headerTitle}>Transmissão</Text>
            </View>
            <Text style={styles.headerSubtitle}>Como a tuberculose é transmitida e como prevenir</Text>
          </View>
        </View>

        <Tabs defaultValue="mecanismo" style={styles.tabs}>
          <TabsList>
            <TabsTrigger value="mecanismo">Como Ocorre</TabsTrigger>
            <TabsTrigger value="locais">Onde/Quem</TabsTrigger>
            <TabsTrigger value="controle">Controle</TabsTrigger>
            <TabsTrigger value="criterios">Critérios</TabsTrigger>
          </TabsList>

          <TabsContent value="mecanismo">
            <View style={styles.tabContent}>
              <Alert>
                <Droplets color={theme.colors.info[600]} size={16} />
                <AlertDescription>
                  A tuberculose é transmitida por via aérea através de gotículas contendo M. tuberculosis. O bacilo pode
                  permanecer no ambiente por 5-12 horas, dependendo da ventilação e iluminação.
                </AlertDescription>
              </Alert>

              <Card style={styles.card}>
                <CardHeader>
                  <View style={styles.cardHeaderWithIcon}>
                    <Activity color={theme.colors.primary[600]} size={20} />
                    <CardTitle style={styles.cardTitle}>Mecanismo de Transmissão</CardTitle>
                  </View>
                  <CardDescription>Como o M. tuberculosis se espalha de pessoa para pessoa</CardDescription>
                </CardHeader>
                <CardContent>
                  <View style={styles.mecanismoContainer}>
                    {mecanismoTransmissao.map((etapa, index) => (
                      <View key={index} style={styles.etapaCard}>
                        <View style={styles.etapaNumber}>
                          <Text style={styles.etapaNumberText}>{index + 1}</Text>
                        </View>
                        <View style={styles.etapaContent}>
                          <View style={styles.etapaHeader}>
                            <Text style={styles.etapaTitulo}>{etapa.etapa}</Text>
                            <Badge style={[styles.riscoBadge, getRiscoBadgeStyle(etapa.risco)]}>
                              <Text style={[styles.riscoText, { color: getRiscoBadgeStyle(etapa.risco).color }]}>
                                {etapa.risco}
                              </Text>
                            </Badge>
                          </View>
                          <Text style={styles.etapaDescricao}>{etapa.descricao}</Text>
                          <Text style={styles.etapaDetalhes}>{etapa.detalhes}</Text>
                        </View>
                      </View>
                    ))}
                  </View>
                </CardContent>
              </Card>

              <Card style={styles.card}>
                <CardHeader>
                  <CardTitle style={styles.cardTitle}>Fatores que Aumentam o Risco</CardTitle>
                  <CardDescription>Condições que facilitam a transmissão</CardDescription>
                </CardHeader>
                <CardContent>
                  <View style={styles.fatoresContainer}>
                    {fatoresRisco.map((fator, index) => (
                      <View key={index} style={styles.fatorCard}>
                        <View style={styles.fatorHeader}>
                          <Text style={styles.fatorNome}>{fator.fator}</Text>
                          <Badge style={[styles.impactoBadge, getImpactoBadgeStyle(fator.impacto)]}>
                            <Text style={[styles.impactoText, { color: getImpactoBadgeStyle(fator.impacto).color }]}>
                              {fator.impacto}
                            </Text>
                          </Badge>
                        </View>
                        <Text style={styles.fatorDescricao}>{fator.descricao}</Text>
                        <Text style={styles.fatorMedida}>{fator.medida}</Text>
                      </View>
                    ))}
                  </View>
                </CardContent>
              </Card>

              <Card style={styles.card}>
                <CardHeader>
                  <CardTitle style={styles.cardTitle}>Redução da Transmissibilidade com Tratamento</CardTitle>
                  <CardDescription>Como o tratamento reduz o risco de transmissão ao longo do tempo</CardDescription>
                </CardHeader>
                <CardContent>
                  <View style={styles.cronologiaContainer}>
                    {cronologiaTransmissao.map((periodo, index) => (
                      <View key={index} style={styles.cronologiaItem}>
                        <View style={styles.cronologiaHeader}>
                          <Text style={styles.cronologiaPeriodo}>{periodo.periodo}</Text>
                          <Text style={styles.cronologiaPercentual}>{periodo.transmissibilidade}%</Text>
                        </View>
                        <Progress 
                          value={periodo.transmissibilidade} 
                          height={12} 
                          color={periodo.cor}
                          style={styles.cronologiaProgress}
                        />
                        <Text style={styles.cronologiaDescricao}>{periodo.descricao}</Text>
                      </View>
                    ))}
                  </View>
                </CardContent>
              </Card>
            </View>
          </TabsContent>

          <TabsContent value="locais">
            <View style={styles.tabContent}>
              <Card style={styles.card}>
                <CardHeader>
                  <View style={styles.cardHeaderWithIcon}>
                    <MapPin color={theme.colors.danger[600]} size={20} />
                    <CardTitle style={styles.cardTitle}>Locais de Alto Risco</CardTitle>
                  </View>
                  <CardDescription>Ambientes onde a transmissão é mais provável</CardDescription>
                </CardHeader>
                <CardContent>
                  <View style={styles.locaisContainer}>
                    {locaisRisco.map((local, index) => (
                      <View key={index} style={styles.localCard}>
                        <View style={styles.localHeader}>
                          <View style={styles.localInfo}>
                            <Text style={styles.localNome}>{local.local}</Text>
                            <Text style={styles.localPopulacao}>{local.populacao}</Text>
                          </View>
                          <Badge style={[styles.riscoLocalBadge, getRiscoLocalBadgeStyle(local.risco)]}>
                            <Text style={[styles.riscoLocalText, { color: getRiscoLocalBadgeStyle(local.risco).color }]}>
                              {local.risco}
                            </Text>
                          </Badge>
                        </View>
                        <View style={styles.medidasContainer}>
                          {local.medidas.map((medida, idx) => (
                            <Badge key={idx} variant="outline" style={styles.medidaBadge}>
                              <Text style={styles.medidaText}>{medida}</Text>
                            </Badge>
                          ))}
                        </View>
                      </View>
                    ))}
                  </View>
                </CardContent>
              </Card>

              <Card style={styles.card}>
                <CardHeader>
                  <View style={styles.cardHeaderWithIcon}>
                    <Users color={theme.colors.info[600]} size={20} />
                    <CardTitle style={styles.cardTitle}>Populações Vulneráveis</CardTitle>
                  </View>
                  <CardDescription>Grupos com maior risco de exposição ou infecção</CardDescription>
                </CardHeader>
                <CardContent>
                  <View style={styles.populacoesGrid}>
                    {populacoesVulneraveis.map((pop, index) => (
                      <View key={index} style={styles.populacaoCard}>
                        <Text style={styles.populacaoGrupo}>{pop.grupo}</Text>
                        <View style={styles.populacaoInfo}>
                          <Text style={styles.populacaoDetalhe}>
                            <Text style={styles.detailLabel}>Tipo de Risco:</Text> {pop.risco}
                          </Text>
                          <Text style={styles.populacaoDetalhe}>
                            <Text style={styles.detailLabel}>Exposição:</Text> {pop.exposicao}
                          </Text>
                          <Text style={styles.populacaoDetalhe}>
                            <Text style={styles.detailLabel}>Proteção:</Text> {pop.protecao}
                          </Text>
                        </View>
                      </View>
                    ))}
                  </View>
                </CardContent>
              </Card>
            </View>
          </TabsContent>

          <TabsContent value="controle">
            <View style={styles.tabContent}>
              <Alert>
                <Shield color={theme.colors.info[600]} size={16} />
                <AlertDescription>
                  O controle da transmissão requer medidas administrativas, ambientais e de proteção respiratória. O
                  tratamento reduz rapidamente a transmissibilidade em 2-3 semanas.
                </AlertDescription>
              </Alert>

              <Card style={styles.card}>
                <CardHeader>
                  <View style={styles.cardHeaderWithIcon}>
                    <Activity color={theme.colors.success[600]} size={20} />
                    <CardTitle style={styles.cardTitle}>Medidas Administrativas</CardTitle>
                  </View>
                  <CardDescription>Organização e protocolos para reduzir transmissão</CardDescription>
                </CardHeader>
                <CardContent>
                  <View style={styles.medidasList}>
                    {medidasControle.administrativas.map((medida, index) => (
                      <View key={index} style={[styles.medidaItem, styles.medidaAdministrativa]}>
                        <View style={[styles.medidaDot, { backgroundColor: theme.colors.success.DEFAULT }]} />
                        <Text style={styles.medidaTexto}>{medida}</Text>
                      </View>
                    ))}
                  </View>
                </CardContent>
              </Card>

              <Card style={styles.card}>
                <CardHeader>
                  <View style={styles.cardHeaderWithIcon}>
                    <Wind color={theme.colors.primary[600]} size={20} />
                    <CardTitle style={styles.cardTitle}>Medidas Ambientais</CardTitle>
                  </View>
                  <CardDescription>Controle do ambiente para reduzir concentração de bacilos</CardDescription>
                </CardHeader>
                <CardContent>
                  <View style={styles.medidasList}>
                    {medidasControle.ambientais.map((medida, index) => (
                      <View key={index} style={[styles.medidaItem, styles.medidaAmbiental]}>
                        <View style={[styles.medidaDot, { backgroundColor: theme.colors.primary.DEFAULT }]} />
                        <Text style={styles.medidaTexto}>{medida}</Text>
                      </View>
                    ))}
                  </View>
                </CardContent>
              </Card>

              <Card style={styles.card}>
                <CardHeader>
                  <View style={styles.cardHeaderWithIcon}>
                    <Shield color={theme.colors.info[600]} size={20} />
                    <CardTitle style={styles.cardTitle}>Medidas de Proteção Respiratória</CardTitle>
                  </View>
                  <CardDescription>Equipamentos de proteção individual</CardDescription>
                </CardHeader>
                <CardContent>
                  <View style={styles.medidasList}>
                    {medidasControle.protecao.map((medida, index) => (
                      <View key={index} style={[styles.medidaItem, styles.medidaProtecao]}>
                        <View style={[styles.medidaDot, { backgroundColor: theme.colors.info.DEFAULT }]} />
                        <Text style={styles.medidaTexto}>{medida}</Text>
                      </View>
                    ))}
                  </View>
                </CardContent>
              </Card>
            </View>
          </TabsContent>

          <TabsContent value="criterios">
            <View style={styles.tabContent}>
              <Card style={styles.card}>
                <CardHeader>
                  <View style={styles.cardHeaderWithIcon}>
                    <Calculator color={theme.colors.primary[600]} size={20} />
                    <CardTitle style={styles.cardTitle}>Critérios Quantitativos</CardTitle>
                  </View>
                  <CardDescription>Valores e medidas para controle da transmissão</CardDescription>
                </CardHeader>
                <CardContent>
                  <View style={styles.criteriosContainer}>
                    {criteriosQuantitativos.map((criterio, index) => (
                      <View key={index} style={styles.criterioCard}>
                        <Text style={styles.criterioParametro}>{criterio.parametro}</Text>
                        <View style={styles.criterioValores}>
                          <View style={styles.valorItem}>
                            <Text style={styles.valorTipo}>População Geral</Text>
                            <Text style={styles.valorNumero}>{criterio.populacaoGeral}</Text>
                          </View>
                          <View style={styles.valorItem}>
                            <Text style={styles.valorTipo}>Grupos de Risco</Text>
                            <Text style={styles.valorNumero}>{criterio.gruposRisco}</Text>
                          </View>
                          <View style={styles.valorItem}>
                            <Text style={styles.valorTipo}>Observação</Text>
                            <Text style={styles.valorObservacao}>{criterio.observacao}</Text>
                          </View>
                        </View>
                      </View>
                    ))}
                  </View>
                </CardContent>
              </Card>

              <Card style={styles.card}>
                <CardHeader>
                  <CardTitle style={styles.cardTitle}>Momentos Críticos</CardTitle>
                </CardHeader>
                <CardContent>
                  <View style={styles.momentosContainer}>
                    <View style={[styles.momentoCard, styles.momentoAntes]}>
                      <Text style={styles.momentoTitulo}>Antes do Tratamento</Text>
                      <Text style={styles.momentoDescricao}>Máximo risco de transmissão - isolamento necessário</Text>
                    </View>
                    <View style={[styles.momentoCard, styles.momentoPrimeiras]}>
                      <Text style={styles.momentoTitulo}>Primeiras 2 Semanas</Text>
                      <Text style={styles.momentoDescricao}>Redução gradual da transmissibilidade</Text>
                    </View>
                    <View style={[styles.momentoCard, styles.momentoApos]}>
                      <Text style={styles.momentoTitulo}>Após 2-3 Semanas</Text>
                      <Text style={styles.momentoDescricao}>Risco mínimo com tratamento efetivo</Text>
                    </View>
                    <View style={[styles.momentoCard, styles.momentoProcedimentos]}>
                      <Text style={styles.momentoTitulo}>Durante Procedimentos</Text>
                      <Text style={styles.momentoDescricao}>Escarro induzido, broncoscopia - EPI obrigatório</Text>
                    </View>
                  </View>
                </CardContent>
              </Card>

              <Alert>
                <Clock color={theme.colors.info[600]} size={16} />
                <AlertDescription>
                  <Text style={styles.boldText}>Importante:</Text> A identificação precoce de casos bacilíferos e o início imediato do
                  tratamento são cruciais para interromper a cadeia de transmissão da tuberculose.
                </AlertDescription>
              </Alert>
            </View>
          </TabsContent>
        </Tabs>
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
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.lg,
    gap: theme.spacing.sm,
  },
  backButton: {
    padding: theme.spacing.sm,
    borderRadius: theme.borderRadius.md,
    backgroundColor: theme.colors.muted.DEFAULT,
  },
  headerContent: {
    flex: 1,
  },
  headerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.xs,
  },
  headerTitle: {
    fontSize: theme.fontSize['2xl'],
    fontWeight: 'bold',
    color: theme.colors.foreground,
  },
  headerSubtitle: {
    fontSize: theme.fontSize.md,
    color: theme.colors.muted.foreground,
  },
  tabs: {
    flex: 1,
  },
  tabContent: {
    gap: theme.spacing.md,
  },
  card: {
    marginBottom: theme.spacing.md,
  },
  cardHeaderWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.xs,
  },
  cardTitle: {
    fontSize: theme.fontSize.lg,
    color: theme.colors.foreground,
  },
  // Estilos para mecanismo de transmissão
  mecanismoContainer: {
    gap: theme.spacing.md,
  },
  etapaCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: theme.spacing.md,
    padding: theme.spacing.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.lg,
  },
  etapaNumber: {
    width: 32,
    height: 32,
    backgroundColor: theme.colors.primary[100],
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  etapaNumberText: {
    fontSize: theme.fontSize.sm,
    fontWeight: 'bold',
    color: theme.colors.primary[600],
  },
  etapaContent: {
    flex: 1,
  },
  etapaHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: theme.spacing.sm,
  },
  etapaTitulo: {
    fontSize: theme.fontSize.sm,
    fontWeight: '600',
    color: theme.colors.foreground,
    flex: 1,
  },
  riscoBadge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  riscoText: {
    fontSize: 10,
  },
  etapaDescricao: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.muted.foreground,
    marginBottom: theme.spacing.xs,
  },
  etapaDetalhes: {
    fontSize: theme.fontSize.xs,
    color: theme.colors.muted.foreground,
  },
  // Estilos para fatores de risco
  fatoresContainer: {
    gap: theme.spacing.md,
  },
  fatorCard: {
    paddingLeft: theme.spacing.sm,
    paddingVertical: theme.spacing.sm,
    borderLeftWidth: 4,
    borderLeftColor: theme.colors.danger.DEFAULT,
  },
  fatorHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: theme.spacing.sm,
  },
  fatorNome: {
    fontSize: theme.fontSize.sm,
    fontWeight: '600',
    color: theme.colors.foreground,
    flex: 1,
  },
  impactoBadge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  impactoText: {
    fontSize: 10,
  },
  fatorDescricao: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.muted.foreground,
    marginBottom: theme.spacing.sm,
  },
  fatorMedida: {
    fontSize: theme.fontSize.sm,
    fontWeight: '500',
    color: theme.colors.success[700],
  },
  // Estilos para cronologia
  cronologiaContainer: {
    gap: theme.spacing.md,
  },
  cronologiaItem: {
    gap: theme.spacing.sm,
  },
  cronologiaHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cronologiaPeriodo: {
    fontSize: theme.fontSize.sm,
    fontWeight: '500',
    color: theme.colors.foreground,
  },
  cronologiaPercentual: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.muted.foreground,
  },
  cronologiaProgress: {
    marginVertical: 2,
  },
  cronologiaDescricao: {
    fontSize: theme.fontSize.xs,
    color: theme.colors.muted.foreground,
  },
  // Estilos para locais de risco
  locaisContainer: {
    gap: theme.spacing.md,
  },
  localCard: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.md,
  },
  localHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: theme.spacing.md,
  },
  localInfo: {
    flex: 1,
  },
  localNome: {
    fontSize: theme.fontSize.sm,
    fontWeight: '600',
    color: theme.colors.foreground,
    marginBottom: 2,
  },
  localPopulacao: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.muted.foreground,
  },
  riscoLocalBadge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  riscoLocalText: {
    fontSize: 10,
  },
  medidasContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.xs,
  },
  medidaBadge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  medidaText: {
    fontSize: 10,
    color: theme.colors.muted.foreground,
  },
  // Estilos para populações vulneráveis
  populacoesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.md,
  },
  populacaoCard: {
    width: '48%',
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.sm,
  },
  populacaoGrupo: {
    fontSize: theme.fontSize.sm,
    fontWeight: '600',
    color: theme.colors.foreground,
    marginBottom: theme.spacing.sm,
  },
  populacaoInfo: {
    gap: theme.spacing.xs,
  },
  populacaoDetalhe: {
    fontSize: theme.fontSize.xs,
    color: theme.colors.foreground,
  },
  detailLabel: {
    fontWeight: 'bold',
  },
  // Estilos para medidas de controle
  medidasList: {
    gap: theme.spacing.xs,
  },
  medidaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
    padding: theme.spacing.sm,
    borderRadius: theme.borderRadius.md,
  },
  medidaAdministrativa: {
    backgroundColor: theme.colors.success[50],
  },
  medidaAmbiental: {
    backgroundColor: theme.colors.primary[50],
  },
  medidaProtecao: {
    backgroundColor: theme.colors.info[50],
  },
  medidaDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  medidaTexto: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.foreground,
    flex: 1,
  },
  // Estilos para critérios
  criteriosContainer: {
    gap: theme.spacing.md,
  },
  criterioCard: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.md,
  },
  criterioParametro: {
    fontSize: theme.fontSize.sm,
    fontWeight: '600',
    color: theme.colors.foreground,
    marginBottom: theme.spacing.md,
  },
  criterioValores: {
    gap: theme.spacing.sm,
  },
  valorItem: {
    padding: theme.spacing.sm,
    borderRadius: theme.borderRadius.md,
    alignItems: 'center',
  },
  valorTipo: {
    fontSize: theme.fontSize.sm,
    fontWeight: '500',
    marginBottom: 2,
  },
  valorNumero: {
    fontSize: theme.fontSize.sm,
  },
  valorObservacao: {
    fontSize: theme.fontSize.sm,
    textAlign: 'center',
  },
  // Estilos para momentos críticos
  momentosContainer: {
    gap: theme.spacing.sm,
  },
  momentoCard: {
    paddingLeft: theme.spacing.sm,
    paddingVertical: theme.spacing.sm,
    borderLeftWidth: 4,
  },
  momentoAntes: {
    borderLeftColor: theme.colors.danger.DEFAULT,
  },
  momentoPrimeiras: {
    borderLeftColor: theme.colors.warning.DEFAULT,
  },
  momentoApos: {
    borderLeftColor: theme.colors.success.DEFAULT,
  },
  momentoProcedimentos: {
    borderLeftColor: theme.colors.primary.DEFAULT,
  },
  momentoTitulo: {
    fontSize: theme.fontSize.sm,
    fontWeight: '500',
    color: theme.colors.foreground,
    marginBottom: 2,
  },
  momentoDescricao: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.muted.foreground,
  },
  boldText: {
    fontWeight: 'bold',
  },
});