Um sistema de avaliação de desempenho é composto por diversas entidades que desempenham papéis específicos na gestão e execução do processo de avaliação. Aqui estão algumas das principais entidades envolvidas em um sistema de avaliação de desempenho:

1. **Funcionários:**
   - São os indivíduos avaliados no processo.
   - Fornecem informações sobre seu próprio desempenho.
   - Participam de reuniões de feedback e estabelecem metas.

2. **Gestores e Supervisores:**
   - Avaliam o desempenho dos funcionários sob sua supervisão.
   - Oferecem feedback construtivo e identificam áreas de melhoria.
   - Podem ajudar na definição de metas e no desenvolvimento de planos de ação.

3. **Recursos Humanos (RH):**
   - Desenvolve e administra o sistema de avaliação de desempenho.
   - Facilita treinamentos para gestores e funcionários.
   - Lida com questões relacionadas a políticas de desempenho e procedimentos.

4. **Sistema de Tecnologia da Informação (TI):**
   - Fornecer e manter plataformas ou ferramentas online para gerenciamento e registro de avaliações.
   - Garante a segurança e confidencialidade dos dados do processo.

5. **Direção e Liderança Executiva:**
   - Define a visão e as metas organizacionais.
   - Participa em avaliações de alto nível e tomada de decisões estratégicas baseadas nos resultados.

6. **Consultores Externos (Opcional):**
   - Podem ser trazidos para fornecer uma perspectiva externa e imparcial.
   - Ajudam a melhorar os processos de avaliação de desempenho.

7. **Comitê de Avaliação (Opcional):**
   - Um grupo de pessoas responsáveis por revisar e aprovar os resultados das avaliações.
   - Pode fornecer uma camada adicional de objetividade e imparcialidade.

8. **Clientes Internos ou Pares (Opcional):**
   - Fornece feedback sobre o desempenho dos funcionários.
   - Esse tipo de avaliação 360 graus envolve múltiplas perspectivas.

9. **Planos de Desenvolvimento Individual (PDI):**
   - Documento que contém as metas de desenvolvimento para o funcionário.
   - Pode incluir planos de treinamento, cursos e atividades para melhorar o desempenho.

10. **Metas e Indicadores de Desempenho:**
    - Define os critérios pelos quais o desempenho é avaliado.
    - Inclui metas específicas, indicadores-chave de desempenho (KPIs) e outros parâmetros relevantes.

Essas entidades trabalham em conjunto para garantir que o processo de avaliação de desempenho seja justo, objetivo e eficaz, contribuindo para o desenvolvimento contínuo dos funcionários e o alcance dos objetivos organizacionais.



A minha proposta como projecto final é desenvolver um sistema de avaliação de desempenho, em que dada a definição de metas e objetivos macro, definimos as avaliações associadas as essas metas e objetivos para sabermos como vai o desenvolvimento e o desempenho de um colaborador.

1. Metas/ Objetivos

2. Colaboradores

3. Avaliações

4. Pontuações associadas as avaliações

Boa noite João.
Sim, a proposta para o tema é adequada ao projeto final.
Será importante o sistema contemplar avaliadores e avaliados (neste caso julgo serem os colaboradores).
Os objetivos deverão conter um peso para o cálculo da pontuação final.
Será importante a avaliação de cada objetivo poder conter um texto associado para poder, no final da avaliação, produzir um relatório para o avaliado.
Veja se concorda com as sugestões e avance com o trabalho.
Cumprimentos.





positions
   name
   description

departaments
   name:string
   description:string

goals
   name:string
   description:string

metrics
   goal_id:foreign
   description:string
   score:integer

employees
   name:string
   is_assess:boolean
   position_id:foreign
   departament_id:foreign

assessments
   was_finish:boolean
   employee_id:foreign
   metric_id:foreign
   employee_score:integer
   supervisor_score:integer
   media_score:integer
