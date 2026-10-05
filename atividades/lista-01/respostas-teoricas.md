# Lista 01 - Respostas Teóricas
**Disciplina:** Programação Web  
**Aluno:** Janayna Sales de Sousa

**1) Sobre tipagem de dados em linguagens de programação e, especificamente em JavaScript, responda o que se pede:**

a) O que caracteriza uma linguagem de tipagem estática? Como a verificação de tipos ocorre em linguagens com tipagem estática? 
Cada variável/expressão é conhecida em tempo de compilação, erros são detectados antes da execução.

b) Quais são os principais benefícios da tipagem estática em termos de performance e segurança? 
Favorece segurança, otimização e detecção precoce de erros.

c) Como funciona a tipagem dinâmica em relação à verificação de tipos em tempo de execução? Quais são os principais desafios de performance enfrentados por linguagens de tipagem dinâmica? 
Os erros são detectados antes da execução. Os desafios são rigidez e complexidade.

d) Quais são as diferenças entre linguagens com tipagem forte e fraca? 
Tipagem Forte: Impede que tipos incompatíveis de dados sejam combinados sem uma conversão explícita. Se você tentar realizar uma operação entre tipos diferentes (como somar uma string e um número), a linguagem lança um erro.
Tipagem Fraca: Realiza conversões automáticas e implícitas de tipos para tentar concluir a operação, mesmo que os dados sejam de tipos diferentes.

e) Como linguagens híbridas conseguem combinar características de tipagem estática e dinâmica? Qual o papel da inferência de tipos em linguagens de tipagem estática? 
Linguagens Híbridas: combinam checagem estática na compilação com recursos dinâmicos (como any no TypeScript ou dynamic no C#) que adiam a verificação para o tempo de execução.
Inferência de Tipos: o compilador deduz o tipo da variável pelo valor atribuído, reduzindo a verbosidade do código sem perder a segurança da tipagem estática.

f) Como a linguagem JavaScript lida com a tipagem de dados? 
Tipagem Dinâmica: O tipo de dado é associado ao valor, não à variável. Não é necessário declarar o tipo da variável, e o mesmo identificador pode armazenar valores de tipos diferentes ao longo da execução.
Tipagem Fraca: O JavaScript realiza conversões automáticas e implícitas de tipos (coerção) durante operações entre valores incompatíveis (por exemplo, "10" - 2 resulta no número 8).
Tipos Primários e Objetos: Os tipos são divididos em Primitivos (string, number, boolean, undefined, null, symbol, bigint) e Objetos (incluindo arrays, funções e objetos literais).
Verificação em Runtime: A checagem dos tipos acontece em tempo de execução, podendo ser checada no código por meio do operador typeof.
