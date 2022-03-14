export interface PaperItemData {
    target: {
        entity: {
            person: string | null;
            behavior: string | null;
            psychology: string | null;
            place: string | null;
            thought: string | null;
            service: string | null;
            product: string | null;
            event: string | null;
        };
        aspect: {
            simple: string | null;
            composite: string | null;
            derived: string | null;
        };
        sentiment: {
            opinion: string | null;
            appraisal: string | null;
            stance: string | null;
            attitude: string | null;
            emotion: string | null;
        };
        opinion_holder: {
            writer: string | null;
            organization: string | null;
            key_player: string | null;
            public: string | null;
            community: string | null;
        };
        time: {
            birth_death: string | null;
            growth_contraction: string | null;
            continuity: string | null;
            accumulation: string | null;
            fusion_discrete: string | null;
            stable: string | null;
            repeat: string | null;
            peak_valley: string | null;
            implication: string | null;
            acceleration: string | null;
        };
    };
    intermediation: {
        detection: {
            subjectivity_detection: string | null;
            emotion_cause_detection: string | null;
            identifying_the_intent_of_sentiment_information: string | null;
            detection_of_evidence_event_that_causes_sentiment_patterns: string | null;
            argument_expression_detection: string | null;
            aspect_based_sentiment_analysis: string | null;
            detection_of_fake_or_deceptive_sentiment_information: string | null;
            hate_speech: string | null;
        };
        summarization: {
            opinion_summarization: string | null;
            sentiment_information_description_a_multi_aspect: string | null;
            personalized_sentiment_analysis: string | null;
            multilingual_and_cross_lingual_sentiment_analysis: string | null;
        };
        classification: {
            emotion_detection_and_classification: string | null;
            polarity_classification: string | null;
        };
        comparison: {
            comparion_of_different_sentiments: string | null;
        };
        exploration: {
            timeline_analysis: string | null;
            analysis_of_debates_comments_and_argumentation: string | null;
            finding_significant: string | null;
            easy_exploration_of_sentiment_information: string | null;
        };
    };
    representation: {
        natural: {
            celestial: string | null;
            human: string | null;
            animal: string | null;
            plant: string | null;
            landscape: string | null;
            compound: string | null;
            metal: string | null;
            nonmetal: string | null;
            cell: string | null;
        };
        artifact: {
            building_structure: string | null;
            geometry: string | null;
            picture: string | null;
            pattern: string | null;
            map: string | null;
            fiber: string | null;
            food: string | null;
            toys_instrument: string | null;
            machine: string | null;
            letter: string | null;
        };
        process: {
            natural_phenomena: string | null;
            machine_software_work: string | null;
            behavior: string | null;
            disaster: string | null;
            space_time_movement: string | null;
            creation_and_destruction: string | null;
        };
    };

    vis_var: {
        vis_var: {
            value: string | null;
            color: string | null;
            dimension: string | null;
            shape: string | null;
            position: string | null;
            orientation: string | null;
            distance: string | null;
        };
    };

    vis_tech: {
        vis_tech: {
            d_visualization: string | null;
            node_link_diagram: string | null;
            bubble_chart: string | null;
            area_chart: string | null;
            line_plot: string | null;
            box_plot: string | null;
            pie_chart: string | null;
            radar_chart: string | null;
            tree_map: string | null;
            text_cloud: string | null;
            heatmap: string | null;
            scatter_plot: string | null;
            mds_map: string | null;
            parallel_coordinate: string | null;
            pixel_based_plot: string | null;
            time_oriented_visualization: string | null;
            spatial_based_visualization: string | null;
        };
    };
    children: PaperItemData[]; //하위요소들의 데이터
}

export interface LLN142 {
    target: {
        entity: {
            person: ['PC15_PV_Target_Entity'];
            behavior: [];
            psychology: [];
            place: [];
            thought: [];
            service: [];
            product: [];
            event: [];
        };
        aspect: {
            simple: [];
            composite: [];
            derived: [];
        };
        sentiment: {
            opinion: [];
            appraisal: [];
            stance: [];
            attitude: [];
            emotion: [];
        };
        opinion_holder: {
            writer: [];
            organization: [];
            key_player: [];
            public: [];
            community: [];
        };
        time: {
            birth_death: [];
            growth_contraction: [];
            continuity: [];
            accumulation: [];
            fusion_discrete: [];
            stable: [];
            repeat: [];
            peak_valley: [];
            implication: [];
            acceleration: [];
        };
    };
    intermediation: {
        detection: {
            subjectivity_detection: [];
            emotion_cause_detection: [];
            identifying_the_intent_of_sentiment_information: [];
            detection_of_evidence_event_that_causes_sentiment_patterns: [];
            argument_expression_detection: [];
            aspect_based_sentiment_analysis: [];
            detection_of_fake_or_deceptive_sentiment_information: [];
            hate_speech: [];
        };
        summarization: {
            opinion_summarization: [];
            sentiment_information_description_a_multi_aspect: [];
        };
        classification: {
            emotion_detection_and_classification: [];
            polarity_classification: [];
        };
        comparison: {
            comparion_of_different_sentiments: [];
        };
        exploration: {
            timeline_analysis: [];
            analysis_of_debates_comments_and_argumentation: [];
            finding_significant: [];
            easy_exploration_of_sentiment_information: [];
        };
    };
    representation: {
        natural: {
            celestial: [];
            human: [];
            animal: [];
            plant: [];
            landscape: [];
            compound: [];
            metal: [];
            nonmetal: [];
            cell: [];
        };
        artifact: {
            building_structure: [];
            geometry: [];
            picture: [];
            pattern: [];
            map: [];
            fiber: [];
            food: [];
            toys_instrument: [];
            machine: [];
            letter: [];
        };
        process: {
            natural_phenomena: [];
            machine_software_work: [];
            behavior: [];
            disaster: [];
            space_time_movement: [];
            creation_and_destruction: [];
        };
    };

    vis_var: {
        vis_var: {
            value: [];
            color: [];
            dimension: [];
            shape: [];
            position: [];
            orientation: [];
            distance: [];
        };
    };

    vis_tech: {
        vis_tech: {
            d_visualization: [];
            node_link_diagram: [];
            bubble_chart: [];
            area_chart: [];
            line_plot: [];
            box_plot: [];
            pie_chart: [];
            radar_chart: [];
            tree_map: [];
            text_cloud: [];
            heatmap: [];
            scatter_plot: [];
            mds_map: [];
            parallel_coordinate: [];
            pixel_based_plot: [];
            time_oriented_visualization: [];
            spatial_based_visualization: [];
        };
    };
}

interface TextToID {
    id: string;
} // 텍스트와 연결되는 데이터셋은 나중에 필요할수도.

export interface LinkResult {}

export interface Link {
    from_id: string; // 각 arrary의 id(key 값)을 연결 받기.
    to_id: string;
}

export const LLN142: Link[] = [
    {
        from_id: '전달하는 id값0',
        to_id: '전달받는 id값0',
    }, // a[0]
    {
        from_id: '전달하는 id값1',
        to_id: '전달받는 id값1',
    }, // a[1]
]; // a[0] ~ [...a]값이 각 연결성을 보여줄 것.
