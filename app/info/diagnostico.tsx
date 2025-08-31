import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { 
  Button, 
  Card, 
  CardHeader, 
  CardContent, 
  CardTitle, 
  CardDescription,
  Badge,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Alert,
  AlertDescription,
  Progress
} from '@/components/ui';
import {
  ArrowLeft,
  Microscope,
  FlaskConical,
  FileText,
  Users,
  MapPin,
  Activity,
  Calculator,
  Stethoscope,
  AlertTriangle,
  CheckCircle,
  XCircle,
  ArrowRight,
  Target,
} from 'lucide-react-native';
import { theme } from '@/styles/theme';

export default function DiagnosticoPage() {
  const metodosLaboratoriais = [
    {
      metodo: "Baciloscopia (BAAR)",
      sensibilidade: 60,
      especificidade: 98,
      tempo: "Mesmo dia",
      custo: "Baixo",
      indicacao: "Sintomáticos respiratórios",
      vantagens: ["Rápido", "Baixo custo", "Identifica casos transmissores"],
      limitacoes: ["Baixa sensibilidade", "Não diferencia espécies", "Não detecta resistência"],
      interpretacao: {
        positivo: "Presença de BAAR (1+ a 3+)",
        negativo: "Ausência de BAAR",
        observacao: "Repetir em 3 amostras diferentes",
      },
    },
    {
      metodo: "TRM-TB (GeneXpert)",
      sensibilidade: 89,
      especificidade: 99,
      tempo: "2 horas",
      custo: "Moderado",
      indicacao: "Casos suspeitos, PVHIV, contatos",
      vantagens: ["Rápido", "Detecta resistência à RIF", "Alta especificidade"],
      limitacoes: ["Custo elevado", "Não detecta outras resistências", "Requer equipamento"],
      interpretacao: {
        positivo: "M. tuberculosis detectado ± resistência RIF",
        negativo: "M. tuberculosis não detectado",
        observacao: "Resultado em 2 horas",
      },
    },
    {
      metodo: "Cultura (Löwenstein-Jensen)",
      sensibilidade: 95,
      especificidade: 99,
      tempo: "2-8 semanas",
      custo: "Moderado",
      indicacao: "Casos suspeitos, teste de sensibilidade",
      vantagens: ["Padrão-ouro", "Teste de sensibilidade", "Identifica espécies"],
      limitacoes: ["Tempo prolongado", "Contaminação", "Requer laboratório especializado"],
      interpretacao: {
        positivo: "Crescimento de M. tuberculosis",
        negativo: "Ausência de crescimento",
        observacao: "Aguardar até 8 semanas",
      },
    },
    {
      metodo: "Cultura Líquida (MGIT)",
      sensibilidade: 95,
      especificidade: 99,
      tempo: "1-3 semanas",
      custo: "Alto",
      indicacao: "Casos suspeitos, monitoramento",
      vantagens: ["Mais rápido que LJ", "Automatizado", "Teste de sensibilidade"],
      limitacoes: ["Custo elevado", "Contaminação", "Equipamento especializado"],
      interpretacao: {
        positivo: "Crescimento detectado automaticamente",
        negativo: "Ausência de crescimento",
        observacao: "Resultado em 1-3 semanas",
      },
    },
  ];

  const metodosImunologicos = [
    {
      teste: "Prova Tuberculínica (PT)",
      principio: "Hipersensibilidade tardia à tuberculina",
      aplicacao: "Intradérmica no antebraço",
      leitura: "48-72 horas após aplicação",
      interpretacao: [
        { populacao: "Contatos de TB", criterio: "≥5mm", significado: "Positivo" },
        { populacao: "PVHIV", criterio: "≥5mm", significado: "Positivo" },
        { populacao: "População geral", criterio: "≥10mm", significado: "Positivo" },
        { populacao: "Vacinados BCG", criterio: "≥15mm", significado: "Positivo" },
      ],
      limitacoes: ["Interferência da BCG", "Falso-negativo em imunossuprimidos", "Reação cruzada"],
    },
    {
      teste: "IGRA (Interferon-Gamma Release Assays)",
      principio: "Liberação de interferon-γ por linfócitos T",
      aplicacao: "Coleta de sangue venoso",
      leitura: "Laboratório especializado",
      interpretacao: [
        { populacao: "Todas", criterio: "Positivo", significado: "Infecção latente ou ativa" },
        { populacao: "Todas", criterio: "Negativo", significado: "Ausência de infecção" },
        { populacao: "Todas", criterio: "Indeterminado", significado: "Repetir teste" },
      ],
      limitacoes: ["Custo elevado", "Não diferencia ILTB de TB ativa", "Disponibilidade limitada"],
    },
  ];

  const metodosImagem = [
    {
      exame: "Radiografia de Tórax",
      indicacao: "Todos os casos suspeitos",
      achados: {
        tbPrimaria: ["Adenomegalia hilar", "Infiltrado parenquimatoso", "Derrame pleural"],
        tbSecundaria: ["Cavitações", "Infiltrados apicais", "Fibrose", "Calcificações"],
        tbMiliar: ["Padrão miliar bilateral", "Micronódulos difusos"],
      },
      limitacoes: ["15% podem ser normais", "Inespecífico", "Não confirma diagnóstico"],
    },
    {
      exame: "Tomografia de Tórax",
      indicacao: "Casos duvidosos, complicações",
      achados: {
        vantagens: ["Maior sensibilidade", "Detecta lesões pequenas", "Avalia extensão"],
        indicacoes: ["RX normal com suspeita clínica", "Investigação de complicações", "TB extrapulmonar"],
      },
      limitacoes: ["Custo elevado", "Radiação", "Não confirma diagnóstico"],
    },
  ];

  const fluxogramaDiagnostico = {
    adultoSintomatico: [
      {
        etapa: "1. Identificação do SR",
        criterio: "Tosse ≥2-3 semanas",
        acao: "Coletar escarro para baciloscopia",
        proxima: "Avaliar resultado",
      },
      {
        etapa: "2. Baciloscopia",
        criterio: "Positiva",
        acao: "Iniciar tratamento",
        proxima: "Tratamento TB",
      },
      {
        etapa: "3. Baciloscopia Negativa",
        criterio: "Suspeita clínica mantida",
        acao: "TRM-TB ou cultura + RX tórax",
        proxima: "Avaliar resultados",
      },
      {
        etapa: "4. TRM-TB/Cultura",
        criterio: "Positiva",
        acao: "Iniciar tratamento",
        proxima: "Tratamento TB",
      },
      {
        etapa: "5. Exames Negativos",
        criterio: "RX sugestivo + clínica",
        acao: "Tratamento empírico ou investigação adicional",
        proxima: "Avaliar resposta",
      },
    ],
    pvhiv: [
      {
        etapa: "1. Rastreamento",
        criterio: "4 sintomas (tosse, febre, sudorese, perda peso)",
        acao: "Qualquer sintoma → investigar",
        proxima: "Coleta de exames",
      },
      {
        etapa: "2. Investigação",
        criterio: "TRM-TB + RX tórax",
        acao: "Priorizar métodos rápidos",
        proxima: "Avaliar resultados",
      },
      {
        etapa: "3. Resultado Positivo",
        criterio: "Qualquer exame positivo",
        acao: "Iniciar tratamento imediatamente",
        proxima: "Tratamento TB-HIV",
      },
      {
        etapa: "4. Resultado Negativo",
        criterio: "Suspeita clínica mantida",
        acao: "Investigar TB extrapulmonar",
        proxima: "Exames específicos",
      },
    ],
    crianca: [
      {
        etapa: "1. Avaliação Clínica",
        criterio: "Sintomas + contato TB + BCG",
        acao: "Aplicar escore brasileiro",
        proxima: "Calcular pontuação",
      },
      {
        etapa: "2. Escore ≥40 pontos",
        criterio: "Muito provável",
        acao: "Iniciar tratamento",
        proxima: "Tratamento TB",
      },
      {
        etapa: "3. Escore 30-35 pontos",
        criterio: "Possível",
        acao: "Investigação adicional",
        proxima: "PT + exames",
      },
      {
        etapa: "4. Escore <30 pontos",
        criterio: "Pouco provável",
        acao: "Investigar outras causas",
        proxima: "Diagnóstico diferencial",
      },
    ],
  };

  const diagnosticoDiferencial = {
    tbPulmonar: [
      {
        doenca: "Pneumonia Bacteriana",
        caracteristicas: "Início agudo, febre alta, leucocitose",
        diferenciacao: "Resposta rápida a antibióticos",
        exames: "Cultura de escarro, hemograma",
      },
      {
        doenca: "Câncer de Pulmão",
        caracteristicas: "Idade >50 anos, tabagismo, hemoptise",
        diferenciacao: "Massa pulmonar, citologia",
        exames: "TC tórax, broncoscopia, biópsia",
      },
      {
        doenca: "Micoses Pulmonares",
        caracteristicas: "Área endêmica, imunossupressão",
        diferenciacao: "Exame micológico direto",
        exames: "KOH, cultura para fungos",
      },
      {
        doenca: "Silicose",
        caracteristicas: "Exposição ocupacional, pneumoconiose",
        diferenciacao: "História ocupacional, padrão radiológico",
        exames: "TC tórax, função pulmonar",
      },
    ],
    tbPleural: [
      {
        doenca: "Derrame Parapneumônico",
        caracteristicas: "Pneumonia associada, pH baixo",
        diferenciacao: "Resposta a antibióticos",
        exames: "Cultura do líquido pleural",
      },
      {
        doenca: "Neoplasia Pleural",
        caracteristicas: "Derrame hemorrágico, citologia",
        diferenciacao: "Células neoplásicas",
        exames: "Citologia, biópsia pleural",
      },
      {
        doenca: "Artrite Reumatoide",
        caracteristicas: "Artrite, fator reumatoide",
        diferenciacao: "Baixo complemento, baixa glicose",
        exames: "FR, anti-CCP, complemento",
      },
    ],
    tbGanglionar: [
      {
        doenca: "Linfoma",
        caracteristicas: "Adenomegalia indolor, sintomas B",
        diferenciacao: "Biópsia com arquitetura alterada",
        exames: "Biópsia excisional, imuno-histoquímica",
      },
      {
        doenca: "Sarcoidose",
        caracteristicas: "Adenomegalia hilar bilateral",
        diferenciacao: "Granulomas não caseosos",
        exames: "Biópsia, ECA, cálcio",
      },
      {
        doenca: "Toxoplasmose",
        caracteristicas: "PVHIV, adenomegalia cervical",
        diferenciacao: "Sorologia, resposta ao tratamento",
        exames: "IgG/IgM toxoplasma, PCR",
      },
    ],
  };

  const biomarcadores = [
    {
      marcador: "ADA Pleural",
      indicacao: "Suspeita TB pleural",
      valorReferencia: ">40 U/L",
      sensibilidade: 92,
      especificidade: 90,
      interpretacao: "Valores elevados sugerem TB pleural",
      limitacoes: "Pode estar elevado em linfomas, empiema",
    },
    {
      marcador: "ADA Liquórica",
      indicacao: "Suspeita TB meningoencefálica",
      valorReferencia: ">10 U/L",
      sensibilidade: 79,
      especificidade: 91,
      interpretacao: "Valores elevados sugerem TB do SNC",
      limitacoes: "Pode estar elevado em meningites bacterianas",
    },
    {
      marcador: "Interferon-γ no Líquido Pleural",
      indicacao: "TB pleural (pesquisa)",
      valorReferencia: ">200 pg/mL",
      sensibilidade: 89,
      especificidade: 97,
      interpretacao: "Alta especificidade para TB pleural",
      limitacoes: "Disponibilidade limitada, custo elevado",
    },
  ];

  const algoritmoTratamento = [
    {
      situacao: "Baciloscopia Positiva",
      decisao: "Iniciar tratamento imediatamente",
      justificativa: "Caso transmissor confirmado",
      followUp: "Cultura para teste de sensibilidade",
    },
    {
      situacao: "TRM-TB Positivo",
      decisao: "Iniciar tratamento",
      justificativa: "Diagnóstico molecular confirmado",
      followUp: "Avaliar resistência à rifampicina",
    },
    {
      situacao: "Cultura Positiva",
      decisao: "Iniciar ou ajustar tratamento",
      justificativa: "Padrão-ouro diagnóstico",
      followUp: "Teste de sensibilidade completo",
    },
    {
      situacao: "Exames Negativos + Clínica Sugestiva",
      decisao: "Considerar tratamento empírico",
      justificativa: "Suspeita clínica forte",
      followUp: "Avaliar resposta terapêutica",
    },
  ];

  const criteriosEspeciais = [
    {
      populacao: "Crianças <10 anos",
      criterios: [
        "Escore brasileiro ≥40 pontos",
        "Contato TB bacilífero",
        "PT ≥10mm (não vacinadas) ou ≥15mm (vacinadas)",
        "RX tórax sugestivo",
      ],
      observacao: "Diagnóstico frequentemente clínico-epidemiológico",
    },
    {
      populacao: "PVHIV",
      criterios: [
        "Qualquer sintoma dos 4 principais",
        "TRM-TB prioritário",
        "Investigar TB extrapulmonar",
        "CD4+ <200: maior risco",
      ],
      observacao: "Apresentação atípica frequente",
    },
    {
      populacao: "Contatos de TB-DR",
      criterios: [
        "TRM-TB para detectar resistência RIF",
        "Cultura obrigatória",
        "Teste de sensibilidade ampliado",
        "Investigação molecular",
      ],
      observacao: "Suspeitar resistência primária",
    },
  ];

  const handleGoBack = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
          <ArrowLeft size={24} color={theme.colors.foreground} />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <View style={styles.titleContainer}>
            <Microscope size={24} color={theme.colors.primary} />
            <Text style={styles.title}>Diagnóstico da Tuberculose</Text>
          </View>
          <Text style={styles.subtitle}>Métodos diagnósticos e interpretação de exames</Text>
        </View>
      </View>

      <Tabs defaultValue="laboratoriais" style={styles.tabs}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabsListContainer}>
          <View style={styles.tabsList}>
            <TabsTrigger value="laboratoriais" style={styles.tabsTrigger}>
              <Text style={styles.tabText}>Laboratório</Text>
            </TabsTrigger>
            <TabsTrigger value="imagem" style={styles.tabsTrigger}>
              <Text style={styles.tabText}>Imagem</Text>
            </TabsTrigger>
            <TabsTrigger value="fluxograma" style={styles.tabsTrigger}>
              <Text style={styles.tabText}>Fluxograma</Text>
            </TabsTrigger>
            <TabsTrigger value="diferencial" style={styles.tabsTrigger}>
              <Text style={styles.tabText}>Diferencial</Text>
            </TabsTrigger>
            <TabsTrigger value="especiais" style={styles.tabsTrigger}>
              <Text style={styles.tabText}>Especiais</Text>
            </TabsTrigger>
          </View>
        </ScrollView>

        <TabsContent value="laboratoriais">
          <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
            <Alert style={styles.alert}>
              <Microscope size={20} color={theme.colors.primary} />
              <AlertDescription>
                O diagnóstico laboratorial da TB baseia-se na demonstração do M. tuberculosis através de métodos
                bacteriológicos (baciloscopia, cultura) e moleculares (TRM-TB).
              </AlertDescription>
            </Alert>

            <Card style={styles.card}>
              <CardHeader>
                <CardTitle style={styles.cardTitle}>
                  <FlaskConical size={20} color={theme.colors.primary} />
                  <Text style={styles.cardTitleText}>Métodos Bacteriológicos</Text>
                </CardTitle>
                <CardDescription>Comparação dos principais métodos diagnósticos</CardDescription>
              </CardHeader>
              <CardContent>
                {metodosLaboratoriais.map((metodo, index) => (
                  <View key={index} style={styles.methodContainer}>
                    <View style={styles.methodHeader}>
                      <View>
                        <Text style={styles.methodTitle}>{metodo.metodo}</Text>
                        <Text style={styles.methodIndication}>{metodo.indicacao}</Text>
                      </View>
                      <View style={styles.methodBadges}>
                        <Badge variant="outline" style={styles.badge}>
                          <Text style={styles.badgeText}>{metodo.tempo}</Text>
                        </Badge>
                        <Badge variant="secondary" style={[styles.badge, styles.costBadge]}>
                          <Text style={styles.badgeText}>{metodo.custo}</Text>
                        </Badge>
                      </View>
                    </View>

                    <View style={styles.performanceGrid}>
                      <View style={styles.performanceItem}>
                        <Text style={styles.performanceLabel}>Sensibilidade</Text>
                        <View style={styles.progressContainer}>
                          <Progress value={metodo.sensibilidade} style={styles.progressBar} />
                          <Text style={styles.performanceValue}>{metodo.sensibilidade}%</Text>
                        </View>
                      </View>
                      <View style={styles.performanceItem}>
                        <Text style={styles.performanceLabel}>Especificidade</Text>
                        <View style={styles.progressContainer}>
                          <Progress value={metodo.especificidade} style={styles.progressBar} />
                          <Text style={styles.performanceValue}>{metodo.especificidade}%</Text>
                        </View>
                      </View>
                    </View>

                    <View style={styles.prosConsGrid}>
                      <View style={styles.prosConsColumn}>
                        <Text style={[styles.prosConsTitle, { color: theme.colors.success }]}>Vantagens</Text>
                        {metodo.vantagens.map((vantagem, i) => (
                          <View key={i} style={styles.prosConsItem}>
                            <CheckCircle size={12} color={theme.colors.success} />
                            <Text style={styles.prosConsText}>{vantagem}</Text>
                          </View>
                        ))}
                      </View>
                      <View style={styles.prosConsColumn}>
                        <Text style={[styles.prosConsTitle, { color: "#ef4444" }]}>Limitações</Text>
                        {metodo.limitacoes.map((limitacao, i) => (
                          <View key={i} style={styles.prosConsItem}>
                            <XCircle size={12} color="#ef4444" />
                            <Text style={styles.prosConsText}>{limitacao}</Text>
                          </View>
                        ))}
                      </View>
                    </View>

                    <View style={styles.separator} />

                    <View style={styles.interpretationContainer}>
                      <Text style={styles.interpretationTitle}>Interpretação</Text>
                      <Text style={styles.interpretationText}>
                        <Text style={styles.interpretationLabel}>Positivo:</Text> {metodo.interpretacao.positivo}
                      </Text>
                      <Text style={styles.interpretationText}>
                        <Text style={styles.interpretationLabel}>Negativo:</Text> {metodo.interpretacao.negativo}
                      </Text>
                      <Text style={[styles.interpretationText, { color: theme.colors.primary }]}>
                        <Text style={styles.interpretationLabel}>Observação:</Text> {metodo.interpretacao.observacao}
                      </Text>
                    </View>
                  </View>
                ))}
              </CardContent>
            </Card>

            <Card style={styles.card}>
              <CardHeader>
                <CardTitle style={styles.cardTitle}>
                  <Target size={20} color="#a855f7" />
                  <Text style={styles.cardTitleText}>Métodos Imunológicos</Text>
                </CardTitle>
                <CardDescription>Testes para detecção de infecção latente</CardDescription>
              </CardHeader>
              <CardContent>
                {metodosImunologicos.map((teste, index) => (
                  <View key={index} style={styles.immuneMethodContainer}>
                    <Text style={styles.immuneMethodTitle}>{teste.teste}</Text>
                    <View style={styles.immuneMethodGrid}>
                      <View>
                        <Text style={styles.immuneMethodDetail}>
                          <Text style={styles.immuneMethodLabel}>Princípio:</Text> {teste.principio}
                        </Text>
                        <Text style={styles.immuneMethodDetail}>
                          <Text style={styles.immuneMethodLabel}>Aplicação:</Text> {teste.aplicacao}
                        </Text>
                        <Text style={styles.immuneMethodDetail}>
                          <Text style={styles.immuneMethodLabel}>Leitura:</Text> {teste.leitura}
                        </Text>
                      </View>
                      <View>
                        <Text style={styles.immuneMethodLabel}>Limitações</Text>
                        {teste.limitacoes.map((limitacao, i) => (
                          <View key={i} style={styles.limitationItem}>
                            <AlertTriangle size={12} color="#f59e0b" />
                            <Text style={styles.limitationText}>{limitacao}</Text>
                          </View>
                        ))}
                      </View>
                    </View>

                    <View style={styles.interpretationByPopulation}>
                      <Text style={styles.interpretationTitle}>Interpretação por População</Text>
                      {teste.interpretacao.map((item, i) => (
                        <View key={i} style={styles.interpretationRow}>
                          <Text style={styles.populationText}>{item.populacao}</Text>
                          <Text style={styles.criterionText}>{item.criterio}</Text>
                          <Badge variant="outline" style={styles.resultBadge}>
                            <Text style={styles.badgeText}>{item.significado}</Text>
                          </Badge>
                        </View>
                      ))}
                    </View>
                  </View>
                ))}
              </CardContent>
            </Card>

            <Card style={styles.card}>
              <CardHeader>
                <CardTitle style={styles.cardTitle}>
                  <Activity size={20} color={theme.colors.success} />
                  <Text style={styles.cardTitleText}>Biomarcadores</Text>
                </CardTitle>
                <CardDescription>Marcadores auxiliares no diagnóstico</CardDescription>
              </CardHeader>
              <CardContent>
                {biomarcadores.map((bio, index) => (
                  <View key={index} style={styles.biomarkerContainer}>
                    <View style={styles.biomarkerHeader}>
                      <Text style={styles.biomarkerTitle}>{bio.marcador}</Text>
                      <Badge variant="outline" style={styles.badge}>
                        <Text style={styles.badgeText}>{bio.valorReferencia}</Text>
                      </Badge>
                    </View>
                    <View style={styles.biomarkerGrid}>
                      <View>
                        <Text style={styles.biomarkerLabel}>Indicação</Text>
                        <Text style={styles.biomarkerValue}>{bio.indicacao}</Text>
                      </View>
                      <View>
                        <Text style={styles.biomarkerLabel}>Sensibilidade</Text>
                        <Text style={[styles.biomarkerValue, { color: theme.colors.success }]}>{bio.sensibilidade}%</Text>
                      </View>
                      <View>
                        <Text style={styles.biomarkerLabel}>Especificidade</Text>
                        <Text style={[styles.biomarkerValue, { color: theme.colors.primary }]}>{bio.especificidade}%</Text>
                      </View>
                    </View>
                    <Text style={styles.biomarkerInterpretation}>{bio.interpretacao}</Text>
                    <Text style={styles.biomarkerLimitation}>{bio.limitacoes}</Text>
                  </View>
                ))}
              </CardContent>
            </Card>
          </ScrollView>
        </TabsContent>

        <TabsContent value="imagem">
          <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
            <Card style={styles.card}>
              <CardHeader>
                <CardTitle style={styles.cardTitle}>
                  <FileText size={20} color={theme.colors.primary} />
                  <Text style={styles.cardTitleText}>Métodos de Imagem</Text>
                </CardTitle>
                <CardDescription>Radiografia e tomografia no diagnóstico da TB</CardDescription>
              </CardHeader>
              <CardContent>
                {metodosImagem.map((exame, index) => (
                  <View key={index} style={styles.imageMethodContainer}>
                    <View style={styles.imageMethodHeader}>
                      <Text style={styles.imageMethodTitle}>{exame.exame}</Text>
                      <Badge variant="secondary" style={styles.badge}>
                        <Text style={styles.badgeText}>{exame.indicacao}</Text>
                      </Badge>
                    </View>

                    {exame.achados && (
                      <View style={styles.findingsContainer}>
                        <Text style={styles.findingsTitle}>Achados Radiológicos</Text>
                        {Object.entries(exame.achados).map(([tipo, achados]) => (
                          <View key={tipo} style={styles.findingItem}>
                            <Text style={styles.findingType}>
                              {tipo.replace(/([A-Z])/g, " $1").trim()}
                            </Text>
                            {Array.isArray(achados) ? (
                              achados.map((achado, i) => (
                                <View key={i} style={styles.findingDetail}>
                                  <View style={styles.findingBullet} />
                                  <Text style={styles.findingText}>{achado}</Text>
                                </View>
                              ))
                            ) : (
                              <Text style={styles.findingText}>{achados}</Text>
                            )}
                          </View>
                        ))}
                      </View>
                    )}

                    {exame.limitacoes && (
                      <View style={styles.limitationsContainer}>
                        <Text style={styles.limitationsTitle}>Limitações</Text>
                        {exame.limitacoes.map((limitacao, i) => (
                          <View key={i} style={styles.limitationItem}>
                            <AlertTriangle size={12} color="#f59e0b" />
                            <Text style={styles.limitationText}>{limitacao}</Text>
                          </View>
                        ))}
                      </View>
                    )}
                  </View>
                ))}
              </CardContent>
            </Card>

            <Alert style={styles.alert}>
              <FileText size={20} color={theme.colors.primary} />
              <AlertDescription>
                <Text style={styles.alertBold}>Importante:</Text> Os exames de imagem são complementares e não confirmam o diagnóstico de TB.
                Sempre associar com métodos bacteriológicos ou moleculares.
              </AlertDescription>
            </Alert>
          </ScrollView>
        </TabsContent>

        <TabsContent value="fluxograma">
          <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
            <Card style={styles.card}>
              <CardHeader>
                <CardTitle style={styles.cardTitle}>
                  <MapPin size={20} color={theme.colors.success} />
                  <Text style={styles.cardTitleText}>Fluxogramas Diagnósticos</Text>
                </CardTitle>
                <CardDescription>Algoritmos por população específica</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="adulto" style={styles.innerTabs}>
                  <View style={styles.innerTabsList}>
                    <TabsTrigger value="adulto" style={styles.innerTabsTrigger}>
                      <Text style={styles.innerTabText}>Adulto SR</Text>
                    </TabsTrigger>
                    <TabsTrigger value="pvhiv" style={styles.innerTabsTrigger}>
                      <Text style={styles.innerTabText}>PVHIV</Text>
                    </TabsTrigger>
                    <TabsTrigger value="crianca" style={styles.innerTabsTrigger}>
                      <Text style={styles.innerTabText}>Criança</Text>
                    </TabsTrigger>
                  </View>

                  {Object.entries(fluxogramaDiagnostico).map(([key, fluxo]) => (
                    <TabsContent key={key} value={key === "adultoSintomatico" ? "adulto" : key}>
                      {fluxo.map((etapa, index) => (
                        <View key={index} style={styles.flowStepContainer}>
                          <View style={styles.stepNumber}>
                            <Text style={styles.stepNumberText}>{index + 1}</Text>
                          </View>
                          <View style={styles.stepContent}>
                            <View style={styles.stepHeader}>
                              <Text style={styles.stepTitle}>{etapa.etapa}</Text>
                              <Badge variant="outline" style={styles.badge}>
                                <Text style={styles.badgeText}>{etapa.criterio}</Text>
                              </Badge>
                            </View>
                            <Text style={styles.stepAction}>{etapa.acao}</Text>
                            <View style={styles.stepNext}>
                              <ArrowRight size={12} color={theme.colors.primary} />
                              <Text style={styles.stepNextText}>{etapa.proxima}</Text>
                            </View>
                          </View>
                        </View>
                      ))}
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>

            <Card style={styles.card}>
              <CardHeader>
                <CardTitle style={styles.cardTitle}>
                  <Calculator size={20} color="#a855f7" />
                  <Text style={styles.cardTitleText}>Algoritmo de Decisão Terapêutica</Text>
                </CardTitle>
                <CardDescription>Quando iniciar o tratamento baseado nos exames</CardDescription>
              </CardHeader>
              <CardContent>
                {algoritmoTratamento.map((item, index) => (
                  <View key={index} style={styles.algorithmItem}>
                    <View style={styles.algorithmHeader}>
                      <Text style={styles.algorithmSituation}>{item.situacao}</Text>
                      <Badge variant={item.decisao.includes("Iniciar") ? "default" : "secondary"} style={styles.badge}>
                        <Text style={styles.badgeText}>{item.decisao}</Text>
                      </Badge>
                    </View>
                    <Text style={styles.algorithmJustification}>{item.justificativa}</Text>
                    <View style={styles.algorithmFollowUp}>
                      <Text style={styles.algorithmFollowUpLabel}>Follow-up:</Text>
                      <Text style={styles.algorithmFollowUpText}> {item.followUp}</Text>
                    </View>
                  </View>
                ))}
              </CardContent>
            </Card>
          </ScrollView>
        </TabsContent>

        <TabsContent value="diferencial">
          <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
            <Card style={styles.card}>
              <CardHeader>
                <CardTitle style={styles.cardTitle}>
                  <Stethoscope size={20} color="#f97316" />
                  <Text style={styles.cardTitleText}>Diagnóstico Diferencial</Text>
                </CardTitle>
                <CardDescription>Principais diagnósticos diferenciais por forma clínica</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="pulmonar" style={styles.innerTabs}>
                  <View style={styles.innerTabsList}>
                    <TabsTrigger value="pulmonar" style={styles.innerTabsTrigger}>
                      <Text style={styles.innerTabText}>TB Pulmonar</Text>
                    </TabsTrigger>
                    <TabsTrigger value="pleural" style={styles.innerTabsTrigger}>
                      <Text style={styles.innerTabText}>TB Pleural</Text>
                    </TabsTrigger>
                    <TabsTrigger value="ganglionar" style={styles.innerTabsTrigger}>
                      <Text style={styles.innerTabText}>TB Ganglionar</Text>
                    </TabsTrigger>
                  </View>

                  {Object.entries(diagnosticoDiferencial).map(([key, diagnosticos]) => (
                    <TabsContent
                      key={key}
                      value={key === "tbPulmonar" ? "pulmonar" : key.replace("tb", "").toLowerCase()}
                    >
                      {diagnosticos.map((diag, index) => (
                        <View key={index} style={styles.differentialItem}>
                          <Text style={styles.differentialTitle}>{diag.doenca}</Text>
                          <View style={styles.differentialGrid}>
                            <View>
                              <Text style={[styles.differentialLabel, { color: theme.colors.primary }]}>Características</Text>
                              <Text style={styles.differentialText}>{diag.caracteristicas}</Text>
                            </View>
                            <View>
                              <Text style={[styles.differentialLabel, { color: theme.colors.success }]}>Diferenciação</Text>
                              <Text style={styles.differentialText}>{diag.diferenciacao}</Text>
                            </View>
                            <View>
                              <Text style={[styles.differentialLabel, { color: "#a855f7" }]}>Exames</Text>
                              <Text style={styles.differentialText}>{diag.exames}</Text>
                            </View>
                          </View>
                        </View>
                      ))}
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>

            <Alert style={styles.alert}>
              <AlertTriangle size={20} color={theme.colors.primary} />
              <AlertDescription>
                <Text style={styles.alertBold}>Lembrete:</Text> O diagnóstico diferencial deve sempre considerar a epidemiologia local, fatores
                de risco do paciente e apresentação clínica. Em caso de dúvida, consulte especialista.
              </AlertDescription>
            </Alert>
          </ScrollView>
        </TabsContent>

        <TabsContent value="especiais">
          <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
            <Card style={styles.card}>
              <CardHeader>
                <CardTitle style={styles.cardTitle}>
                  <Users size={20} color="#ef4444" />
                  <Text style={styles.cardTitleText}>Critérios Diagnósticos Especiais</Text>
                </CardTitle>
                <CardDescription>Populações específicas e situações especiais</CardDescription>
              </CardHeader>
              <CardContent>
                {criteriosEspeciais.map((criterio, index) => (
                  <View key={index} style={styles.specialCriteriaContainer}>
                    <View style={styles.specialCriteriaHeader}>
                      <Text style={styles.specialCriteriaTitle}>{criterio.populacao}</Text>
                      <Badge variant="outline" style={styles.badge}>
                        <Text style={styles.badgeText}>Especial</Text>
                      </Badge>
                    </View>
                    <View style={styles.criteriaList}>
                      {criterio.criterios.map((item, i) => (
                        <View key={i} style={styles.criteriaItem}>
                          <CheckCircle size={12} color={theme.colors.success} />
                          <Text style={styles.criteriaText}>{item}</Text>
                        </View>
                      ))}
                    </View>
                    <View style={styles.observationContainer}>
                      <Text style={styles.observationText}>
                        <Text style={styles.observationLabel}>Observação:</Text> {criterio.observacao}
                      </Text>
                    </View>
                  </View>
                ))}
              </CardContent>
            </Card>

            <Card style={styles.card}>
              <CardHeader>
                <CardTitle style={styles.cardTitleText}>Escore Brasileiro para Diagnóstico de TB em Crianças</CardTitle>
              </CardHeader>
              <CardContent>
                <View style={styles.scoreContainer}>
                  <View style={styles.scoreGrid}>
                    <View style={styles.scoreSection}>
                      <Text style={styles.scoreSectionTitle}>Critérios Clínicos</Text>
                      <Text style={styles.scoreItem}>
                        • Febre ou sintomas como tosse, adinamia, expectoração, emagrecimento, sudorese {'>'}2 semanas: 15 pontos
                      </Text>
                      <Text style={styles.scoreItem}>• Assintomático ou com sintomas {'<'}2 semanas: 0 pontos</Text>
                      <Text style={styles.scoreItem}>• Desnutrição: 5 pontos</Text>
                    </View>
                    <View style={styles.scoreSection}>
                      <Text style={styles.scoreSectionTitle}>Critérios Epidemiológicos</Text>
                      <Text style={styles.scoreItem}>• História de contato TB: 10 pontos</Text>
                      <Text style={styles.scoreItem}>• Sem história de contato: 0 pontos</Text>
                    </View>
                  </View>
                  <View style={styles.scoreGrid}>
                    <View style={styles.scoreSection}>
                      <Text style={styles.scoreSectionTitle}>Prova Tuberculínica</Text>
                      <Text style={styles.scoreItem}>• ≥15mm (vacinada BCG) ou ≥10mm (não vacinada): 15 pontos</Text>
                      <Text style={styles.scoreItem}>• 5-14mm (vacinada) ou 5-9mm (não vacinada): 10 pontos</Text>
                      <Text style={styles.scoreItem}>• 0-4mm: 0 pontos</Text>
                    </View>
                    <View style={styles.scoreSection}>
                      <Text style={styles.scoreSectionTitle}>Radiografia de Tórax</Text>
                      <Text style={styles.scoreItem}>• Sugestiva de TB: 15 pontos</Text>
                      <Text style={styles.scoreItem}>• Normal ou com outras alterações: 0 pontos</Text>
                    </View>
                  </View>
                  <View style={styles.scoreInterpretation}>
                    <Text style={styles.scoreInterpretationTitle}>Interpretação</Text>
                    <Text style={styles.scoreResult}>• ≥40 pontos: Muito provável - Iniciar tratamento</Text>
                    <Text style={styles.scoreResult}>• 30-35 pontos: Possível - Investigação adicional</Text>
                    <Text style={styles.scoreResult}>• {'<'}30 pontos: Pouco provável - Investigar outras causas</Text>
                  </View>
                </View>
              </CardContent>
            </Card>

            <Alert style={styles.alert}>
              <AlertTriangle size={20} color={theme.colors.primary} />
              <AlertDescription>
                <Text style={styles.alertBold}>Tempo é crucial:</Text> Em casos suspeitos com alta probabilidade clínica, não retarde o início
                do tratamento aguardando confirmação laboratorial, especialmente em PVHIV e crianças.
              </AlertDescription>
            </Alert>
          </ScrollView>
        </TabsContent>
      </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: theme.spacing.md,
    paddingTop: theme.spacing.xl,
    backgroundColor: theme.colors.background,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  backButton: {
    padding: theme.spacing.sm,
    marginRight: theme.spacing.sm,
  },
  headerContent: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
  },
  title: {
    fontSize: theme.fontSize.xl,
    fontWeight: '700',
    color: theme.colors.foreground,
  },
  subtitle: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.muted.foreground,
    marginTop: theme.spacing.xs,
  },
  tabs: {
    flex: 1,
  },
  tabsListContainer: {
    maxHeight: 50,
    marginHorizontal: theme.spacing.md,
    marginTop: theme.spacing.md,
  },
  tabsList: {
    flexDirection: 'row',
    backgroundColor: theme.colors.muted.DEFAULT,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.xs,
    gap: theme.spacing.xs,
  },
  tabsTrigger: {
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 90,
  },
  tabText: {
    fontSize: theme.fontSize.sm,
    fontWeight: '500',
    color: theme.colors.muted.foreground,
  },
  scrollView: {
    flex: 1,
    padding: theme.spacing.md,
  },
  alert: {
    marginBottom: theme.spacing.md,
  },
  alertBold: {
    fontWeight: '600',
  },
  card: {
    marginBottom: theme.spacing.md,
  },
  cardTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.xs,
  },
  cardTitleText: {
    fontSize: theme.fontSize.lg,
    fontWeight: '600',
    color: theme.colors.foreground,
  },
  methodContainer: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
  },
  methodHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: theme.spacing.md,
  },
  methodTitle: {
    fontSize: theme.fontSize.lg,
    fontWeight: '600',
    color: theme.colors.foreground,
  },
  methodIndication: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.muted.foreground,
    marginTop: theme.spacing.xs,
  },
  methodBadges: {
    alignItems: 'flex-end',
  },
  badge: {
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
  },
  badgeText: {
    fontSize: theme.fontSize.xs,
    fontWeight: '500',
  },
  costBadge: {
    marginTop: theme.spacing.xs,
  },
  performanceGrid: {
    flexDirection: 'row',
    gap: theme.spacing.md,
    marginBottom: theme.spacing.md,
  },
  performanceItem: {
    flex: 1,
  },
  performanceLabel: {
    fontSize: theme.fontSize.sm,
    fontWeight: '600',
    color: theme.colors.foreground,
    marginBottom: theme.spacing.sm,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
  },
  progressBar: {
    flex: 1,
    height: 8,
  },
  performanceValue: {
    fontSize: theme.fontSize.sm,
    fontWeight: '600',
    color: theme.colors.foreground,
  },
  prosConsGrid: {
    flexDirection: 'row',
    gap: theme.spacing.md,
    marginBottom: theme.spacing.md,
  },
  prosConsColumn: {
    flex: 1,
  },
  prosConsTitle: {
    fontSize: theme.fontSize.sm,
    fontWeight: '600',
    marginBottom: theme.spacing.sm,
  },
  prosConsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.xs,
  },
  prosConsText: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.foreground,
    flex: 1,
  },
  separator: {
    height: 1,
    backgroundColor: theme.colors.border,
    marginVertical: theme.spacing.sm,
  },
  interpretationContainer: {
    backgroundColor: theme.colors.muted.DEFAULT,
    padding: theme.spacing.sm,
    borderRadius: theme.borderRadius.lg,
  },
  interpretationTitle: {
    fontSize: theme.fontSize.sm,
    fontWeight: '600',
    color: theme.colors.foreground,
    marginBottom: theme.spacing.sm,
  },
  interpretationText: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.foreground,
    marginBottom: theme.spacing.xs,
  },
  interpretationLabel: {
    fontWeight: '600',
  },
  immuneMethodContainer: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
  },
  immuneMethodTitle: {
    fontSize: theme.fontSize.lg,
    fontWeight: '600',
    color: theme.colors.foreground,
    marginBottom: theme.spacing.sm,
  },
  immuneMethodGrid: {
    flexDirection: 'row',
    gap: theme.spacing.md,
    marginBottom: theme.spacing.md,
  },
  immuneMethodDetail: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.foreground,
    marginBottom: theme.spacing.xs,
  },
  immuneMethodLabel: {
    fontWeight: '600',
  },
  limitationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.xs,
  },
  limitationText: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.foreground,
    flex: 1,
  },
  interpretationByPopulation: {
    backgroundColor: theme.colors.primary + '20',
    padding: theme.spacing.sm,
    borderRadius: theme.borderRadius.lg,
  },
  interpretationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
  },
  populationText: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.foreground,
    flex: 2,
  },
  criterionText: {
    fontSize: theme.fontSize.sm,
    fontWeight: '600',
    color: theme.colors.foreground,
    flex: 1,
    textAlign: 'center',
  },
  resultBadge: {
    paddingHorizontal: theme.spacing.xs,
    paddingVertical: theme.spacing.xs / 2,
    flex: 1,
  },
  biomarkerContainer: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.sm,
    marginBottom: theme.spacing.sm,
  },
  biomarkerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: theme.spacing.sm,
  },
  biomarkerTitle: {
    fontSize: theme.fontSize.sm,
    fontWeight: '600',
    color: theme.colors.foreground,
  },
  biomarkerGrid: {
    flexDirection: 'row',
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.sm,
  },
  biomarkerLabel: {
    fontSize: theme.fontSize.sm,
    fontWeight: '600',
    color: theme.colors.foreground,
  },
  biomarkerValue: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.muted.foreground,
  },
  biomarkerInterpretation: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.muted.foreground,
    marginBottom: theme.spacing.xs,
  },
  biomarkerLimitation: {
    fontSize: theme.fontSize.xs,
    color: "#f59e0b",
  },
  imageMethodContainer: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
  },
  imageMethodHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: theme.spacing.sm,
  },
  imageMethodTitle: {
    fontSize: theme.fontSize.lg,
    fontWeight: '600',
    color: theme.colors.foreground,
  },
  findingsContainer: {
    marginBottom: theme.spacing.md,
  },
  findingsTitle: {
    fontSize: theme.fontSize.sm,
    fontWeight: '600',
    color: theme.colors.foreground,
    marginBottom: theme.spacing.sm,
  },
  findingItem: {
    borderLeftWidth: 4,
    borderLeftColor: theme.colors.primary,
    paddingLeft: theme.spacing.sm,
    marginBottom: theme.spacing.sm,
  },
  findingType: {
    fontSize: theme.fontSize.sm,
    fontWeight: '600',
    color: theme.colors.foreground,
    marginBottom: theme.spacing.xs,
    textTransform: 'capitalize',
  },
  findingDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.xs,
  },
  findingBullet: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: theme.colors.primary,
  },
  findingText: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.foreground,
    flex: 1,
  },
  limitationsContainer: {
    backgroundColor: "#f59e0b" + '20',
    padding: theme.spacing.sm,
    borderRadius: theme.borderRadius.lg,
  },
  limitationsTitle: {
    fontSize: theme.fontSize.sm,
    fontWeight: '600',
    color: "#f59e0b",
    marginBottom: theme.spacing.xs,
  },
  innerTabs: {
    flex: 1,
  },
  innerTabsList: {
    flexDirection: 'row',
    backgroundColor: theme.colors.muted.DEFAULT,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.xs,
    marginBottom: theme.spacing.md,
  },
  innerTabsTrigger: {
    flex: 1,
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.sm,
    borderRadius: theme.borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerTabText: {
    fontSize: theme.fontSize.sm,
    fontWeight: '500',
    color: theme.colors.muted.foreground,
  },
  flowStepContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.sm,
  },
  stepNumber: {
    width: 32,
    height: 32,
    backgroundColor: theme.colors.primary,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepNumberText: {
    fontSize: theme.fontSize.sm,
    fontWeight: '700',
    color: theme.colors.background,
  },
  stepContent: {
    flex: 1,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.sm,
  },
  stepHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: theme.spacing.sm,
  },
  stepTitle: {
    fontSize: theme.fontSize.sm,
    fontWeight: '600',
    color: theme.colors.foreground,
    flex: 1,
  },
  stepAction: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.muted.foreground,
    marginBottom: theme.spacing.xs,
  },
  stepNext: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
  },
  stepNextText: {
    fontSize: theme.fontSize.xs,
    color: theme.colors.primary,
  },
  algorithmItem: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
  },
  algorithmHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: theme.spacing.sm,
  },
  algorithmSituation: {
    fontSize: theme.fontSize.sm,
    fontWeight: '600',
    color: theme.colors.foreground,
    flex: 1,
  },
  algorithmJustification: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.muted.foreground,
    marginBottom: theme.spacing.sm,
  },
  algorithmFollowUp: {
    backgroundColor: theme.colors.primary + '20',
    padding: theme.spacing.sm,
    borderRadius: theme.borderRadius.md,
    flexDirection: 'row',
  },
  algorithmFollowUpLabel: {
    fontSize: theme.fontSize.xs,
    fontWeight: '600',
    color: theme.colors.foreground,
  },
  algorithmFollowUpText: {
    fontSize: theme.fontSize.xs,
    color: theme.colors.foreground,
    flex: 1,
  },
  differentialItem: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
  },
  differentialTitle: {
    fontSize: theme.fontSize.sm,
    fontWeight: '600',
    color: theme.colors.foreground,
    marginBottom: theme.spacing.sm,
  },
  differentialGrid: {
    gap: theme.spacing.sm,
  },
  differentialLabel: {
    fontSize: theme.fontSize.sm,
    fontWeight: '600',
    marginBottom: theme.spacing.xs,
  },
  differentialText: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.muted.foreground,
    marginBottom: theme.spacing.sm,
  },
  specialCriteriaContainer: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
  },
  specialCriteriaHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: theme.spacing.sm,
  },
  specialCriteriaTitle: {
    fontSize: theme.fontSize.lg,
    fontWeight: '600',
    color: theme.colors.foreground,
    flex: 1,
  },
  criteriaList: {
    marginBottom: theme.spacing.sm,
  },
  criteriaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.sm,
  },
  criteriaText: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.foreground,
    flex: 1,
  },
  observationContainer: {
    backgroundColor: theme.colors.primary + '20',
    padding: theme.spacing.sm,
    borderRadius: theme.borderRadius.lg,
  },
  observationText: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.primary,
  },
  observationLabel: {
    fontWeight: '600',
  },
  scoreContainer: {
    gap: theme.spacing.sm,
  },
  scoreGrid: {
    flexDirection: 'row',
    gap: theme.spacing.md,
    marginBottom: theme.spacing.md,
  },
  scoreSection: {
    flex: 1,
  },
  scoreSectionTitle: {
    fontSize: theme.fontSize.sm,
    fontWeight: '600',
    color: theme.colors.foreground,
    marginBottom: theme.spacing.sm,
  },
  scoreItem: {
    fontSize: theme.fontSize.xs,
    color: theme.colors.foreground,
    marginBottom: theme.spacing.xs,
  },
  scoreInterpretation: {
    backgroundColor: theme.colors.success + '20',
    padding: theme.spacing.sm,
    borderRadius: theme.borderRadius.lg,
  },
  scoreInterpretationTitle: {
    fontSize: theme.fontSize.sm,
    fontWeight: '600',
    color: theme.colors.success,
    marginBottom: theme.spacing.xs,
  },
  scoreResult: {
    fontSize: theme.fontSize.xs,
    color: theme.colors.success,
    marginBottom: theme.spacing.xs,
  },
});