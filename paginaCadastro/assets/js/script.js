let url='https://go-wash-api.onrender.com/api/user'

async function cadastro(){
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let cpf = document.getElementById('cpf').value;
    let birthday = document.getElementById('birthday').value;
    let password = document.getElementById('password').value;
    let terms = document.getElementById('terms').cheked;

    let api = await fetch(url,{
        method:"POST",
        body:JSON.stringify(
            {
            "name":name,
            "email":email,
            "user_type_id":1,
            "cpf":cpf,
            "terms":terms,
            "password": password,
            "birthday":birthday

            }
        ),
        headers:{
            'Content-Type':'application/json'
        }
    })

    if(api.ok){
        let resposta = await api.json();
        console.log(resposta)
        return
    }
    let respostaErro = await api.json();

    alert(respostaErro.data.errors.cpf[0]);
}


/*quem contrói a api decide
get->busca
post->requisição
put->atualizaçõa
delete->remover
*/