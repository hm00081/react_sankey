import { SankeyData } from '../types/sankey';

export const PaperNode: SankeyData = {
    nodes: [
        { name: 'person', type: 'Target', subtype: '0' }, // 0
        { name: 'behavior', type: 'Target', subtype: '0' },
        { name: 'psychology', type: 'Target', subtype: '0' },
        { name: 'place', type: 'Target', subtype: '0' },
        { name: 'thought', type: 'Target', subtype: '0' },
        { name: 'service', type: 'Target', subtype: '0' },
        { name: 'product', type: 'Target', subtype: '0' },
        { name: 'event', type: 'Target', subtype: '0' }, // 7
        { name: 'simple', type: 'Target', subtype: '1' },
        { name: 'composite', type: 'Target', subtype: '1' },
        { name: 'derived', type: 'Target', subtype: '1' },
        { name: 'opinion', type: 'Target', subtype: '2' }, // 11
        { name: 'appraisal', type: 'Target', subtype: '2' },
        { name: 'stance', type: 'Target', subtype: '2' },
        { name: 'attitude', type: 'Target', subtype: '2' },
        { name: 'emotion', type: 'Target', subtype: '2' },
        { name: 'writer', type: 'Target', subtype: '3' },
        { name: 'organization', type: 'Target', subtype: '3' },
        { name: 'key_player', type: 'Target', subtype: '3' }, // 18
        { name: 'public', type: 'Target', subtype: '3' },
        { name: 'community', type: 'Target', subtype: '3' },
        { name: 'birth_death', type: 'Target', subtype: '4' },
        { name: 'growth_contraction', type: 'Target', subtype: '4' },
        { name: 'continuity', type: 'Target', subtype: '4' },
        { name: 'accumulation', type: 'Target', subtype: '4' }, // 24
        { name: 'fusion_discrete', type: 'Target', subtype: '4' }, // 25
        { name: 'stable', type: 'Target', subtype: '4' },
        { name: 'repeat', type: 'Target', subtype: '4' },
        { name: 'peak_valley', type: 'Target', subtype: '4' },
        { name: 'implication', type: 'Target', subtype: '4' },
        { name: 'acceleration', type: 'Target', subtype: '4' }, // 30
        { name: 'subjectivity_detection', type: 'Intermediation', subtype: '0' },
        { name: 'emotion_cause_detection', type: 'Intermediation', subtype: '0' },
        { name: 'identifying_the_intent_of_sentiment_information', type: 'Intermediation', subtype: '0' },
        { name: 'detection_of_evidence_event_that_causes_sentiment_patterns', type: 'Intermediation', subtype: '0' },
        { name: 'argument_expression_detection', type: 'Intermediation', subtype: '0' },
        { name: 'aspect_based_sentiment_analysis', type: 'Intermediation', subtype: '0' },
        { name: 'detection_of_fake_or_deceptive_sentiment_information', type: 'Intermediation', subtype: '0' },
        { name: 'hate_speech', type: 'Intermediation', subtype: '0' },
        { name: 'opinion_summarization', type: 'Intermediation', subtype: '1' }, // 39
        { name: 'sentiment_information_description_a_multi_aspect', type: 'Intermediation', subtype: '1' }, // 40
        { name: 'emotion_detection_and_classification', type: 'Intermediation', subtype: '2' },
        { name: 'polarity_classification', type: 'Intermediation', subtype: '2' },
        { name: 'personalized_sentiment_analysis', type: 'Intermediation', subtype: '2' },
        { name: 'multilingual_and_cross_lingual_sentiment_analysis', type: 'Intermediation', subtype: '2' },
        { name: 'comparsion_of_different_sentiments', type: 'Intermediation', subtype: '3' }, // 45
        { name: 'timeline_analysis', type: 'Intermediation', subtype: '4' }, // 46
        { name: 'analysis_of_debates_comments_and_argumentation', type: 'Intermediation', subtype: '4' }, // 47
        { name: 'finding_significant', type: 'Intermediation', subtype: '4' }, // 48
        { name: 'easy_exploration_of_sentiment_information', type: 'Intermediation', subtype: '4' }, // 49
        { name: 'celestial', type: 'Representation', subtype: '0' }, // 50
        { name: 'human', type: 'Representation', subtype: '0' },
        { name: 'animal', type: 'Representation', subtype: '0' },
        { name: 'plant', type: 'Representation', subtype: '0' },
        { name: 'landscape', type: 'Representation', subtype: '0' }, // 54
        { name: 'compound', type: 'Representation', subtype: '0' },
        { name: 'metal', type: 'Representation', subtype: '0' },
        { name: 'nonmetal', type: 'Representation', subtype: '0' },
        { name: 'cell', type: 'Representation', subtype: '0' },
        { name: 'building&structure', type: 'Representation', subtype: '1' }, // 59 (바퀴)
        { name: 'geometry', type: 'Representation', subtype: '1' },
        { name: 'picture', type: 'Representation', subtype: '1' },
        { name: 'pattern', type: 'Representation', subtype: '1' }, // 62
        { name: 'map', type: 'Representation', subtype: '1' },
        { name: 'fiber', type: 'Representation', subtype: '1' },
        { name: 'food', type: 'Representation', subtype: '1' },
        { name: 'toys_instrument', type: 'Representation', subtype: '1' },
        { name: 'software', type: 'Representation', subtype: '1' },
        { name: 'machine', type: 'Representation', subtype: '1' },
        { name: 'letter', type: 'Representation', subtype: '1' },
        { name: 'natural_phenomena', type: 'Representation', subtype: '2' }, // 70
        { name: 'behavior', type: 'Representation', subtype: '2' },
        { name: 'disaster', type: 'Representation', subtype: '2' },
        { name: 'space_time_movement', type: 'Representation', subtype: '2' },
        { name: 'machine_software_work', type: 'Representation', subtype: '3' },
        { name: 'creation_and_destruction', type: 'Representation', subtype: '3' }, // 75
        { name: 'value', type: 'Vis_var&tech', subtype: '0' }, // 76
        { name: 'color', type: 'Vis_var&tech', subtype: '0' }, // 77
        { name: 'size', type: 'Vis_var&tech', subtype: '0' }, // 78
        { name: 'shape', type: 'Vis_var&tech', subtype: '0' }, // 79
        { name: 'position', type: 'Vis_var&tech', subtype: '0' },
        { name: 'orientation', type: 'Vis_var&tech', subtype: '0' },
        { name: 'distance', type: 'Vis_var&tech', subtype: '0' }, // 82
        { name: '3d_visualization', type: 'Vis_var&tech', subtype: '1' }, // 83
        { name: 'node_link_diagram', type: 'Vis_var&tech', subtype: '1' },
        { name: 'bubble_chart', type: 'Vis_var&tech', subtype: '1' },
        { name: 'area_chart', type: 'Vis_var&tech', subtype: '1' },
        { name: 'line_plot', type: 'Vis_var&tech', subtype: '1' },
        { name: 'box_plot', type: 'Vis_var&tech', subtype: '1' },
        { name: 'pie_chart', type: 'Vis_var&tech', subtype: '1' },
        { name: 'radar_chart', type: 'Vis_var&tech', subtype: '1' },
        { name: 'tree_map', type: 'Vis_var&tech', subtype: '1' },
        { name: 'tag_cloud', type: 'Vis_var&tech', subtype: '1' }, // 이름 수정
        { name: 'heatmap', type: 'Vis_var&tech', subtype: '1' },
        { name: 'scatter_plot', type: 'Vis_var&tech', subtype: '1' },
        { name: 'mds_map', type: 'Vis_var&tech', subtype: '1' },
        { name: 'parallel_coordinate', type: 'Vis_var&tech', subtype: '1' },
        { name: 'pixel_based_plot', type: 'Vis_var&tech', subtype: '1' },
        { name: 'time_oriented_visualization', type: 'Vis_var&tech', subtype: '1' },
        { name: 'spatial_based_visualization', type: 'Vis_var&tech', subtype: '1' }, // 99
        { name: 'CAA20', type: 'Paper' }, // 100
        { name: 'CGK21', type: 'Paper' },
        { name: 'CSL12', type: 'Paper' },
        { name: 'DMC09', type: 'Paper' },
        { name: 'EAIA17', type: 'Paper' }, // 105
        { name: 'EYG15', type: 'Paper' },
        { name: 'FCF09', type: 'Paper' },
        { name: 'GGS12MT', type: 'Paper' },
        { name: 'GGS12ST', type: 'Paper' },
        { name: 'GGS12TPS', type: 'Paper' },
        { name: 'HYZ13', type: 'Paper' }, // 110
        { name: 'JTM11', type: 'Paper' }, // 111
        { name: 'JSM16', type: 'Paper' }, // 112
        { name: 'JX17', type: 'Paper' },
        { name: 'KSBK15', type: 'Paper' }, // 114
        { name: 'LGX16', type: 'Paper' }, // 115
        { name: 'LJC18', type: 'Paper' },
        { name: 'LLN14', type: 'Paper' },
        { name: 'LWW13', type: 'Paper' },
        { name: 'MA16', type: 'Paper' },
        { name: 'MDD10', type: 'Paper' }, // 120
        { name: 'MEV16', type: 'Paper' },
        { name: 'MHK16', type: 'Paper' }, // 122
        { name: 'MVM17', type: 'Paper' },
        { name: 'MWSO08', type: 'Paper' },
        { name: 'PC15PV', type: 'Paper' }, // 125
        { name: 'REP15', type: 'Paper' },
        { name: 'SCS16', type: 'Paper' }, // 127
        { name: 'SCS17', type: 'Paper' },
        { name: 'SCS19', type: 'Paper' }, // 129
        { name: 'SSK12', type: 'Paper' }, // 130
        { name: 'VWH13', type: 'Paper' },
        { name: 'XD99', type: 'Paper' },
        { name: 'XWL17', type: 'Paper' },
        { name: 'XWS16', type: 'Paper' },
        { name: 'YFS10', type: 'Paper' }, // 135
        { name: 'ZGWZ14', type: 'Paper' },
        { name: 'ZLW13', type: 'Paper' },
        { name: 'SRJ13', type: 'Paper' },
        { name: 'RSRY12', type: 'Paper' },
        { name: 'FAKM15', type: 'Paper' }, // 140
        { name: 'YSK14', type: 'Paper' },
        { name: 'CSL16', type: 'Paper' },
        { name: 'RRR19', type: 'Paper' },
        { name: 'YCC20', type: 'Paper' },
        { name: 'MDDD16', type: 'Paper' }, // 145
        { name: 'GYS14', type: 'Paper' },
        { name: 'MDJW07', type: 'Paper' },
        { name: 'KWL09', type: 'Paper' },
        { name: 'BN11B', type: 'Paper' }, // 149
        { name: 'MLG06', type: 'Paper' }, // 150
        { name: 'FA20', type: 'Paper' },
        { name: 'WHWS12', type: 'Paper' }, // 152
        { name: 'FZC18', type: 'Paper' }, // 153
    ],
    links: [],
    status: [],
};
