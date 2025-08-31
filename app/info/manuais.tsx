import React, { useCallback } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Linking,
  Alert as AlertModal,
} from 'react-native';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Alert, AlertDescription } from '@/components/ui/Alert';
import {
  FileText,
  ExternalLink,
  BookOpen,
  Users,
  Stethoscope,
  Shield,
  AlertCircle,
  Calendar,
  Globe,
} from 'lucide-react-native';

export default function ManuaisScreen() {
  const manuais = [
    {
      categoria: "Diretrizes Nacionais",
      icon: BookOpen,
      color: "#2563eb",
      bgColor: "#eff6ff",
      borderColor: "#bfdbfe",
      documentos: [
        {
          titulo: "Manual de Recomendações para o Controle da Tuberculose no Brasil",
          descricao: "Diretrizes oficiais do Ministério da Saúde para controle da TB",
          ano: "2019",
          orgao: "Ministério da Saúde",
          url: "https://bvsms.saude.gov.br/bvs/publicacoes/manual_recomendacoes_controle_tuberculose_brasil_2_ed.pdf",
          tipo: "PDF",
          tamanho: "15.2 MB",
          status: "Atual",
          statusColor: { bg: "#dcfce7", text: "#15803d", border: "#bbf7d0" },
        },
        {
          titulo: "Protocolo de Vigilância da Infecção Latente pelo Mycobacterium tuberculosis no Brasil",
          descricao: "Protocolo para manejo da infecção latente por TB",
          ano: "2018",
          orgao: "Ministério da Saúde",
          url: "https://bvsms.saude.gov.br/bvs/publicacoes/protocolo_vigilancia_infeccao_latente_mycobacterium_tuberculosis.pdf",
          tipo: "PDF",
          tamanho: "8.5 MB",
          status: "Vigente",
          statusColor: { bg: "#dbeafe", text: "#1d4ed8", border: "#bfdbfe" },
        },
        {
          titulo: "Plano Nacional pelo Fim da Tuberculose como Problema de Saúde Pública",
          descricao: "Estratégia nacional para eliminação da TB até 2035",
          ano: "2017",
          orgao: "Ministério da Saúde",
          url: "https://bvsms.saude.gov.br/bvs/publicacoes/brasil_livre_tuberculose_plano_nacional.pdf",
          tipo: "PDF",
          tamanho: "12.8 MB",
          status: "Estratégico",
          statusColor: { bg: "#f3e8ff", text: "#7c3aed", border: "#d8b4fe" },
        },
      ],
    },
    {
      categoria: "Protocolos Clínicos",
      icon: Stethoscope,
      color: "#059669",
      bgColor: "#f0fdf4",
      borderColor: "#bbf7d0",
      documentos: [
        {
          titulo: "Protocolo Clínico e Diretrizes Terapêuticas para Manejo da Infecção pelo HIV em Adultos",
          descricao: "Manejo da coinfecção TB-HIV em adultos",
          ano: "2018",
          orgao: "Ministério da Saúde",
          url: "https://www.gov.br/aids/pt-br/centrais-de-conteudo/pcdts/2013/hiv-adulto/pcdt_adulto_12_07_2018_final.pdf",
          tipo: "PDF",
          tamanho: "18.3 MB",
          status: "Atual",
          statusColor: { bg: "#dcfce7", text: "#15803d", border: "#bbf7d0" },
        },
        {
          titulo: "Tratamento Diretamente Observado (TDO) da Tuberculose na Atenção Primária",
          descricao: "Protocolo para implementação do TDO",
          ano: "2011",
          orgao: "Ministério da Saúde",
          url: "https://bvsms.saude.gov.br/bvs/publicacoes/tratamento_diretamente_observado_tuberculose.pdf",
          tipo: "PDF",
          tamanho: "6.2 MB",
          status: "Referência",
          statusColor: { bg: "#fed7aa", text: "#c2410c", border: "#fdba74" },
        },
        {
          titulo: "Tuberculose na Atenção Primária à Saúde",
          descricao: "Guia prático para profissionais da APS",
          ano: "2011",
          orgao: "Ministério da Saúde",
          url: "https://bvsms.saude.gov.br/bvs/publicacoes/tuberculose_atencao_primaria_saude.pdf",
          tipo: "PDF",
          tamanho: "4.8 MB",
          status: "Prático",
          statusColor: { bg: "#ccfbf1", text: "#0f766e", border: "#99f6e4" },
        },
      ],
    },
    {
      categoria: "Populações Especiais",
      icon: Users,
      color: "#7c3aed",
      bgColor: "#faf5ff",
      borderColor: "#d8b4fe",
      documentos: [
        {
          titulo: "Tuberculose na População em Situação de Rua",
          descricao: "Estratégias específicas para população vulnerável",
          ano: "2014",
          orgao: "Ministério da Saúde",
          url: "https://bvsms.saude.gov.br/bvs/publicacoes/tuberculose_populacao_situacao_rua.pdf",
          tipo: "PDF",
          tamanho: "3.2 MB",
          status: "Específico",
          statusColor: { bg: "#f3e8ff", text: "#7c3aed", border: "#d8b4fe" },
        },
        {
          titulo: "Tuberculose e HIV: Guia de Vigilância Epidemiológica",
          descricao: "Vigilância epidemiológica da coinfecção TB-HIV",
          ano: "2017",
          orgao: "Ministério da Saúde",
          url: "https://bvsms.saude.gov.br/bvs/publicacoes/tuberculose_hiv_guia_vigilancia_epidemiologica.pdf",
          tipo: "PDF",
          tamanho: "7.1 MB",
          status: "Vigilância",
          statusColor: { bg: "#fecaca", text: "#dc2626", border: "#fca5a5" },
        },
        {
          titulo: "Tuberculose Infantil: Abordagem e Diagnóstico",
          descricao: "Manejo específico da TB em crianças",
          ano: "2016",
          orgao: "Sociedade Brasileira de Pediatria",
          url: "https://www.sbp.com.br/fileadmin/user_upload/pdfs/tuberculose-infantil-abordagem-diagnostico.pdf",
          tipo: "PDF",
          tamanho: "5.4 MB",
          status: "Pediátrico",
          statusColor: { bg: "#fce7f3", text: "#be185d", border: "#f9a8d4" },
        },
      ],
    },
    {
      categoria: "Diretrizes Internacionais",
      icon: Globe,
      color: "#ea580c",
      bgColor: "#fff7ed",
      borderColor: "#fed7aa",
      documentos: [
        {
          titulo: "WHO Global Tuberculosis Report 2023",
          descricao: "Relatório global da OMS sobre tuberculose",
          ano: "2023",
          orgao: "World Health Organization",
          url: "https://www.who.int/publications/i/item/9789240083851",
          tipo: "PDF",
          tamanho: "22.5 MB",
          status: "Internacional",
          statusColor: { bg: "#dbeafe", text: "#1d4ed8", border: "#bfdbfe" },
        },
        {
          titulo: "WHO Treatment Guidelines for Drug-Resistant Tuberculosis",
          descricao: "Diretrizes da OMS para TB resistente",
          ano: "2022",
          orgao: "World Health Organization",
          url: "https://www.who.int/publications/i/item/9789240007048",
          tipo: "PDF",
          tamanho: "18.7 MB",
          status: "Referência",
          statusColor: { bg: "#fed7aa", text: "#c2410c", border: "#fdba74" },
        },
        {
          titulo: "End TB Strategy: Global Strategy and Targets for Tuberculosis Prevention",
          descricao: "Estratégia global End TB da OMS",
          ano: "2015",
          orgao: "World Health Organization",
          url: "https://www.who.int/publications/i/item/WHO-HTM-TB-2015.19",
          tipo: "PDF",
          tamanho: "8.9 MB",
          status: "Estratégico",
          statusColor: { bg: "#f3e8ff", text: "#7c3aed", border: "#d8b4fe" },
        },
      ],
    },
  ];

  const handleDownload = useCallback(async (url: string, titulo: string) => {
    try {
      const supported = await Linking.canOpenURL(url);
      
      if (supported) {
        await Linking.openURL(url);
      } else {
        AlertModal.alert(
          "Erro",
          "Não foi possível abrir o documento. Verifique se você tem um aplicativo adequado instalado.",
          [{ text: "OK" }]
        );
      }
    } catch (error) {
      AlertModal.alert(
        "Erro",
        "Ocorreu um erro ao tentar abrir o documento. Tente novamente.",
        [{ text: "OK" }]
      );
    }
  }, []);

  const totalDocumentos = manuais.reduce((total, categoria) => total + categoria.documentos.length, 0);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <FileText size={32} color="#2563eb" />
        </View>
        <Text style={styles.title}>Manuais e Diretrizes</Text>
        <Text style={styles.subtitle}>
          Acesse os principais documentos oficiais, protocolos e diretrizes sobre tuberculose
        </Text>
        <View style={styles.badgesContainer}>
          <Badge variant="outline" style={styles.headerBadge}>
            <Text style={styles.headerBadgeText}>{totalDocumentos} documentos</Text>
          </Badge>
          <Badge variant="outline" style={styles.headerBadge}>
            <Text style={styles.headerBadgeText}>4 categorias</Text>
          </Badge>
        </View>
      </View>

      <Alert style={styles.alert}>
        <AlertCircle size={16} color="#2563eb" />
        <AlertDescription style={styles.alertDescription}>
          <Text style={styles.boldText}>Importante:</Text> Os links direcionam para os documentos oficiais nos sites do Ministério da
          Saúde, OMS e outras instituições. Certifique-se de ter uma conexão estável para download.
        </AlertDescription>
      </Alert>

      <View style={styles.categoriasContainer}>
        {manuais.map((categoria, categoriaIndex) => (
          <View key={categoria.categoria} style={styles.categoriaSection}>
            <View style={styles.categoriaHeader}>
              <View style={[styles.categoriaIcon, { backgroundColor: categoria.bgColor }]}>
                <categoria.icon size={24} color={categoria.color} />
              </View>
              <View style={styles.categoriaInfo}>
                <Text style={styles.categoriaTitulo}>{categoria.categoria}</Text>
                <Text style={styles.categoriaSubtitulo}>
                  {categoria.documentos.length} documento{categoria.documentos.length !== 1 ? "s" : ""} disponível
                  {categoria.documentos.length !== 1 ? "eis" : ""}
                </Text>
              </View>
            </View>

            <View style={styles.documentosContainer}>
              {categoria.documentos.map((doc, docIndex) => (
                <Card key={doc.titulo} style={[styles.documentoCard, { borderColor: categoria.borderColor }]}>
                  <CardHeader style={styles.documentoHeader}>
                    <View style={styles.documentoTopRow}>
                      <Badge
                        variant="outline"
                        style={[styles.statusBadge, { backgroundColor: doc.statusColor.bg, borderColor: doc.statusColor.border }]}
                      >
                        <Text style={[styles.statusText, { color: doc.statusColor.text }]}>
                          {doc.status}
                        </Text>
                      </Badge>
                      <View style={styles.anoContainer}>
                        <Calendar size={12} color="#64748b" />
                        <Text style={styles.anoText}>{doc.ano}</Text>
                      </View>
                    </View>

                    <CardTitle style={styles.documentoTitulo}>{doc.titulo}</CardTitle>
                    
                    <CardDescription style={styles.documentoDescricao}>
                      {doc.descricao}
                    </CardDescription>

                    <View style={styles.documentoDetalhes}>
                      <View style={styles.detalheRow}>
                        <Text style={styles.detalheLabel}>Órgão:</Text>
                        <Text style={styles.detalheValor}>{doc.orgao}</Text>
                      </View>
                      <View style={styles.detalheRow}>
                        <Text style={styles.detalheLabel}>Formato:</Text>
                        <View style={styles.formatoContainer}>
                          <Badge variant="secondary" style={styles.formatoBadge}>
                            <Text style={styles.formatoText}>{doc.tipo}</Text>
                          </Badge>
                          <Text style={styles.tamanhoText}>{doc.tamanho}</Text>
                        </View>
                      </View>
                    </View>

                    <Button
                      onPress={() => handleDownload(doc.url, doc.titulo)}
                      style={styles.downloadButton}
                    >
                      <View style={styles.downloadButtonContent}>
                        <ExternalLink size={16} color="#ffffff" />
                        <Text style={styles.downloadButtonText}>Acessar Documento</Text>
                      </View>
                    </Button>
                  </CardHeader>
                </Card>
              ))}
            </View>
          </View>
        ))}
      </View>

      {/* Seção de informações adicionais */}
      <Card style={styles.fontesCard}>
        <CardHeader style={styles.fontesHeader}>
          <CardTitle style={styles.fontesTitle}>
            <Shield size={20} color="#ffffff" />
            <Text style={styles.fontesTitleText}>Fontes Oficiais</Text>
          </CardTitle>
          <CardDescription style={styles.fontesDescription}>
            Todos os documentos são provenientes de fontes oficiais como Ministério da Saúde, OMS, sociedades médicas
            e instituições reconhecidas. Mantenha-se sempre atualizado com as diretrizes mais recentes.
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Informações sobre atualizações */}
      <Alert style={styles.warningAlert}>
        <AlertCircle size={16} color="#d97706" />
        <AlertDescription style={styles.warningAlertDescription}>
          <Text style={styles.boldText}>Atenção:</Text> As diretrizes e protocolos são atualizados periodicamente. Verifique sempre a data
          de publicação e consulte os sites oficiais para versões mais recentes.
        </AlertDescription>
      </Alert>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  contentContainer: {
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  iconContainer: {
    width: 64,
    height: 64,
    backgroundColor: '#dbeafe',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e293b',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
    lineHeight: 24,
    maxWidth: 300,
    marginBottom: 16,
  },
  badgesContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  headerBadge: {
    borderColor: '#bfdbfe',
  },
  headerBadgeText: {
    color: '#2563eb',
    fontSize: 12,
  },
  alert: {
    marginBottom: 24,
    backgroundColor: '#eff6ff',
    borderColor: '#bfdbfe',
  },
  alertDescription: {
    fontSize: 14,
    color: '#1e40af',
    lineHeight: 20,
  },
  boldText: {
    fontWeight: '600',
  },
  categoriasContainer: {
    gap: 32,
  },
  categoriaSection: {
    gap: 24,
  },
  categoriaHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  categoriaIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoriaInfo: {
    flex: 1,
  },
  categoriaTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e40af',
  },
  categoriaSubtitulo: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 2,
  },
  documentosContainer: {
    gap: 24,
  },
  documentoCard: {
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  documentoHeader: {
    paddingBottom: 16,
  },
  documentoTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  statusBadge: {
    borderWidth: 1,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
  },
  anoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  anoText: {
    fontSize: 12,
    color: '#64748b',
  },
  documentoTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e40af',
    lineHeight: 22,
    marginBottom: 8,
  },
  documentoDescricao: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 20,
    marginBottom: 16,
  },
  documentoDetalhes: {
    gap: 8,
    marginBottom: 16,
  },
  detalheRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detalheLabel: {
    fontSize: 14,
    color: '#64748b',
  },
  detalheValor: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2563eb',
    flex: 1,
    textAlign: 'right',
  },
  formatoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  formatoBadge: {
    backgroundColor: '#e2e8f0',
  },
  formatoText: {
    fontSize: 12,
    color: '#475569',
  },
  tamanhoText: {
    fontSize: 12,
    color: '#64748b',
  },
  downloadButton: {
    backgroundColor: '#2563eb',
    width: '100%',
  },
  downloadButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  downloadButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
  },
  fontesCard: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.46,
    elevation: 9,
    marginTop: 16,
    marginBottom: 16,
  },
  fontesHeader: {
    backgroundColor: '#2563eb',
    margin: 0,
    borderRadius: 8,
    padding: 16,
  },
  fontesTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  fontesTitleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  fontesDescription: {
    fontSize: 14,
    color: '#dbeafe',
    lineHeight: 20,
  },
  warningAlert: {
    backgroundColor: '#fffbeb',
    borderColor: '#fed7aa',
    marginBottom: 16,
  },
  warningAlertDescription: {
    fontSize: 14,
    color: '#d97706',
    lineHeight: 20,
  },
});